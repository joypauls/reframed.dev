/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";


type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      canonicalUrl?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <p sx={{ color: `secondary`, mt: 3, mb: 1, fontSize: [1, 1, 2] }}>
      {post.tags && (
        <React.Fragment>
          {/* {` — `} */}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
    <Heading as="h1" variant="styles.postTitle">
      {post.title}
    </Heading>
    <Heading as="h5" variant="styles.postDescription">
      {post.description}
    </Heading>
    <p sx={{ color: `secondary`, mt: 3, fontSize: [1, 1, 2] }}>
      <i className="fa fa-calendar" sx={{ marginRight: `5px` }}></i>
      <time sx={{ mr: 3 }}>{post.date}</time>
      {/* {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>} */}
    </p>
    <section
      sx={{
        my: 5,
        // mx: [0, 0, 4],
        ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
        variant: `layout.content`,
        ".footnotes>ol>li": { fontSize: "1rem" },
        ".footnotes>ol>li>.footnote-backref": { marginLeft: "0.5rem" },
        // ".footnotes>hr": { color: `#FFF` },
      }}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Layout>
);

export default Post;
