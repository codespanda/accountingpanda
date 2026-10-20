import { useEffect, useRef, type ReactNode } from "react"
import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Placeholder } from "@tiptap/extensions"
import {
  Bold,
  Code,
  Heading2,
  Heading3,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Quote,
  Redo2,
  Undo2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { docToMarkdown, markdownToHtml, safeHref, type DocNode } from "@/lib/markdown"

// A visual editor for blog post bodies. It edits formatted text but reads
// and writes the site's limited Markdown, so published posts are still
// rendered by components/Markdown.tsx. Only formats that Markdown supports
// are enabled (no underline, strikethrough or code blocks).

function ToolButton({
  label,
  active,
  disabled,
  onClick,
  children,
}: {
  label: string
  active?: boolean
  disabled?: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-lg transition-colors disabled:opacity-30",
        active ? "bg-bento-forest text-white" : "text-gray-600 hover:bg-white hover:text-brand-heading"
      )}
    >
      {children}
    </button>
  )
}

const Divider = () => <span className="mx-1 h-5 w-px bg-gray-300" aria-hidden="true" />

function Toolbar({ editor }: { editor: Editor }) {
  const state = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      paragraph:
        e.isActive("paragraph") &&
        !e.isActive("bulletList") &&
        !e.isActive("orderedList") &&
        !e.isActive("blockquote"),
      h2: e.isActive("heading", { level: 2 }),
      h3: e.isActive("heading", { level: 3 }),
      bold: e.isActive("bold"),
      italic: e.isActive("italic"),
      code: e.isActive("code"),
      link: e.isActive("link"),
      bullet: e.isActive("bulletList"),
      ordered: e.isActive("orderedList"),
      quote: e.isActive("blockquote"),
      canUndo: e.can().undo(),
      canRedo: e.can().redo(),
    }),
  })

  const setLink = () => {
    const current = (editor.getAttributes("link").href as string | undefined) ?? ""
    const input = window.prompt("Link address (https://…). Leave empty to remove the link.", current)
    if (input === null) return
    const href = input.trim()
    if (!href) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }
    const withProtocol = /^[a-z]+:|^\/|^#/i.test(href) ? href : `https://${href}`
    if (!safeHref(withProtocol)) {
      window.alert("Use a web address (https://…), an email link (mailto:…) or a page on this site (/…).")
      return
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: withProtocol }).run()
  }

  const c = () => editor.chain().focus()

  return (
    <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 bg-brand-bg px-2 py-1.5">
      <ToolButton label="Paragraph" active={state.paragraph} onClick={() => c().setParagraph().run()}>
        <Pilcrow className="h-4 w-4" />
      </ToolButton>
      <ToolButton label="Heading (Ctrl+Alt+2)" active={state.h2} onClick={() => c().toggleHeading({ level: 2 }).run()}>
        <Heading2 className="h-4 w-4" />
      </ToolButton>
      <ToolButton label="Subheading (Ctrl+Alt+3)" active={state.h3} onClick={() => c().toggleHeading({ level: 3 }).run()}>
        <Heading3 className="h-4 w-4" />
      </ToolButton>
      <Divider />
      <ToolButton label="Bold (Ctrl+B)" active={state.bold} onClick={() => c().toggleBold().run()}>
        <Bold className="h-4 w-4" />
      </ToolButton>
      <ToolButton label="Italic (Ctrl+I)" active={state.italic} onClick={() => c().toggleItalic().run()}>
        <Italic className="h-4 w-4" />
      </ToolButton>
      <ToolButton label="Inline code (Ctrl+E)" active={state.code} onClick={() => c().toggleCode().run()}>
        <Code className="h-4 w-4" />
      </ToolButton>
      <ToolButton label="Link" active={state.link} onClick={setLink}>
        <Link2 className="h-4 w-4" />
      </ToolButton>
      <Divider />
      <ToolButton label="Bullet list (Ctrl+Shift+8)" active={state.bullet} onClick={() => c().toggleBulletList().run()}>
        <List className="h-4 w-4" />
      </ToolButton>
      <ToolButton
        label="Numbered list (Ctrl+Shift+7)"
        active={state.ordered}
        onClick={() => c().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </ToolButton>
      <ToolButton label="Highlighted callout" active={state.quote} onClick={() => c().toggleBlockquote().run()}>
        <Quote className="h-4 w-4" />
      </ToolButton>
      <ToolButton label="Divider line" onClick={() => c().setHorizontalRule().run()}>
        <Minus className="h-4 w-4" />
      </ToolButton>
      <Divider />
      <ToolButton label="Undo (Ctrl+Z)" disabled={!state.canUndo} onClick={() => c().undo().run()}>
        <Undo2 className="h-4 w-4" />
      </ToolButton>
      <ToolButton label="Redo (Ctrl+Y)" disabled={!state.canRedo} onClick={() => c().redo().run()}>
        <Redo2 className="h-4 w-4" />
      </ToolButton>
    </div>
  )
}

export function RichTextEditor({
  id,
  value,
  onChange,
  placeholder,
}: {
  id?: string
  value: string
  onChange: (markdown: string) => void
  placeholder?: string
}) {
  // The last Markdown this editor produced, so outside changes (like
  // clearing the draft) can be told apart from our own updates.
  const lastEmitted = useRef(value)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        codeBlock: false,
        strike: false,
        underline: false,
        link: { openOnClick: false, autolink: true, defaultProtocol: "https" },
      }),
      Placeholder.configure({ placeholder: placeholder ?? "Start writing…" }),
    ],
    content: markdownToHtml(value),
    editorProps: {
      attributes: {
        ...(id ? { id } : {}),
        "aria-label": "Post body",
        class: "min-h-[24rem] px-5 py-4 outline-none",
      },
    },
    onUpdate: ({ editor: e }) => {
      const markdown = docToMarkdown(e.getJSON() as DocNode)
      lastEmitted.current = markdown
      onChange(markdown)
    },
  })

  useEffect(() => {
    if (!editor || value === lastEmitted.current) return
    lastEmitted.current = value
    editor.commands.setContent(markdownToHtml(value), { emitUpdate: false })
  }, [editor, value])

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-gray-200 bg-white focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/20",
        // Content styles, matching the published post as closely as possible.
        "[&_.ProseMirror]:space-y-3 [&_.ProseMirror]:text-base [&_.ProseMirror]:leading-relaxed [&_.ProseMirror]:text-gray-700",
        "[&_h2]:pt-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-heading",
        "[&_h3]:pt-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-brand-heading",
        "[&_strong]:font-semibold [&_strong]:text-brand-heading",
        "[&_a]:font-medium [&_a]:text-brand-green [&_a]:underline",
        "[&_code]:rounded [&_code]:bg-brand-bg [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em]",
        "[&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6 [&_li::marker]:text-brand-green",
        "[&_blockquote]:rounded-xl [&_blockquote]:bg-bento-mint [&_blockquote]:px-4 [&_blockquote]:py-3 [&_blockquote]:text-bento-forest",
        "[&_hr]:my-4 [&_hr]:border-gray-200",
        "[&_.is-editor-empty:first-child::before]:pointer-events-none [&_.is-editor-empty:first-child::before]:float-left [&_.is-editor-empty:first-child::before]:h-0 [&_.is-editor-empty:first-child::before]:text-gray-400 [&_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]"
      )}
    >
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}
