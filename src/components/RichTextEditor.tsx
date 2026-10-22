import { useEffect, useRef, useState, type ChangeEvent, type ReactNode } from "react"
import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Placeholder } from "@tiptap/extensions"
import Image from "@tiptap/extension-image"
import { TableKit } from "@tiptap/extension-table"
import {
  Bold,
  Code,
  Heading2,
  Heading3,
  ImagePlus,
  Italic,
  Loader2,
  Link2,
  List,
  ListOrdered,
  Minus,
  Pilcrow,
  Quote,
  Redo2,
  Table as TableIcon,
  Undo2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { resizeImage } from "@/lib/imageResize"
import { docToMarkdown, markdownToHtml, safeHref, type DocNode } from "@/lib/markdown"

// A visual editor for blog post bodies. It edits formatted text but reads
// and writes the site's limited Markdown, so published posts are still
// rendered by components/Markdown.tsx. Only formats that Markdown supports
// are enabled (no underline, strikethrough or code blocks). Inserted images
// are kept as data URLs in the draft and uploaded to the repo on publish.

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

function TextButton({ onClick, danger, children }: { onClick: () => void; danger?: boolean; children: ReactNode }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={cn(
        "rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors",
        danger ? "text-red-700 hover:bg-red-50" : "text-gray-700 hover:bg-white hover:text-brand-heading"
      )}
    >
      {children}
    </button>
  )
}

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
      table: e.isActive("table"),
      image: e.isActive("image"),
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

  const fileInput = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  const onImageFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ""
    if (!file) return
    setUploading(true)
    try {
      const src = await resizeImage(file, 1200, 0.82)
      const alt = window.prompt("Describe this image. It's shown as the caption and read by screen readers.", "") ?? ""
      c().setImage({ src, alt: alt.trim() }).run()
    } catch (err) {
      window.alert((err as Error).message)
    } finally {
      setUploading(false)
    }
  }

  const editCaption = () => {
    const current = (editor.getAttributes("image").alt as string | undefined) ?? ""
    const alt = window.prompt("Image caption / description", current)
    if (alt !== null) c().updateAttributes("image", { alt: alt.trim() }).run()
  }

  return (
    // Sticks just below the site's sticky navbar while scrolling a long post.
    <div className="sticky top-[88px] z-20 rounded-t-xl border-b border-gray-200 bg-brand-bg shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5">
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
        <ToolButton label="Insert image" disabled={uploading} onClick={() => fileInput.current?.click()}>
          {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
        </ToolButton>
        <ToolButton
          label="Insert table"
          active={state.table}
          onClick={() => c().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
        >
          <TableIcon className="h-4 w-4" />
        </ToolButton>
        <input
          ref={fileInput}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={onImageFile}
          className="hidden"
        />
        <Divider />
        <ToolButton label="Undo (Ctrl+Z)" disabled={!state.canUndo} onClick={() => c().undo().run()}>
          <Undo2 className="h-4 w-4" />
        </ToolButton>
        <ToolButton label="Redo (Ctrl+Y)" disabled={!state.canRedo} onClick={() => c().redo().run()}>
          <Redo2 className="h-4 w-4" />
        </ToolButton>
      </div>
      {state.table && (
        <div className="flex flex-wrap items-center gap-0.5 border-t border-gray-200 px-2 py-1">
          <span className="px-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">Table</span>
          <TextButton onClick={() => c().addRowBefore().run()}>+ Row above</TextButton>
          <TextButton onClick={() => c().addRowAfter().run()}>+ Row below</TextButton>
          <TextButton onClick={() => c().addColumnBefore().run()}>+ Column left</TextButton>
          <TextButton onClick={() => c().addColumnAfter().run()}>+ Column right</TextButton>
          <TextButton onClick={() => c().deleteRow().run()}>− Row</TextButton>
          <TextButton onClick={() => c().deleteColumn().run()}>− Column</TextButton>
          <TextButton danger onClick={() => c().deleteTable().run()}>
            Delete table
          </TextButton>
        </div>
      )}
      {state.image && (
        <div className="flex flex-wrap items-center gap-0.5 border-t border-gray-200 px-2 py-1">
          <span className="px-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">Image</span>
          <TextButton onClick={editCaption}>Edit caption</TextButton>
          <TextButton danger onClick={() => c().deleteSelection().run()}>
            Remove image
          </TextButton>
        </div>
      )}
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
      Image.configure({ allowBase64: true }),
      TableKit.configure({ table: { resizable: false } }),
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
        "rounded-xl border border-gray-200 bg-white focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/20",
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
        "[&_img]:my-2 [&_img]:max-w-full [&_img]:rounded-xl [&_img.ProseMirror-selectednode]:outline-3 [&_img.ProseMirror-selectednode]:outline-brand-green",
        "[&_.tableWrapper]:overflow-x-auto [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
        "[&_td]:border [&_td]:border-gray-200 [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_th]:border [&_th]:border-gray-200 [&_th]:bg-brand-bg [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-brand-heading",
        "[&_.selectedCell]:bg-bento-mint/60 [&_td_p]:m-0 [&_th_p]:m-0",
        "[&_.is-editor-empty:first-child::before]:pointer-events-none [&_.is-editor-empty:first-child::before]:float-left [&_.is-editor-empty:first-child::before]:h-0 [&_.is-editor-empty:first-child::before]:text-gray-400 [&_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]"
      )}
    >
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  )
}
