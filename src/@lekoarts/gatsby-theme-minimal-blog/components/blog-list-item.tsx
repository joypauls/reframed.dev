/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4} pl={3} sx={{ borderLeft: `2px solid`, borderColor: "tagBackground" }}>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], color: `heading` }}>
      {post.title}
    </TLink>
    <p sx={{ color: `secondary`, mt: 1, fontSize: [1, 1, 2] }}>
      <time style={{ marginRight: "1rem" }}>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
);

export default BlogListItem;
