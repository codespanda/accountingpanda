# Scheduled blog posts

Posts scheduled from the blog studio are saved here as JSON, with a `publishAt`
time (ISO 8601, UTC). The site never reads this folder, so they stay hidden.

Every 15 minutes the "Publish scheduled blog posts" GitHub workflow runs
`scripts/publish-scheduled-posts.mjs`, which moves any post whose time has
passed into `src/content/blog/` and redeploys the site.

Cover and body images for scheduled posts are uploaded to `public/assets/` when
the post is scheduled, so they are reachable by direct URL before the post goes
live.
