/** @jsx jsx */
import React from "react";
import { jsx, Card, Flex, Box, Text, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import "font-awesome/css/font-awesome.min.css";

type BlogListCardProps = {
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

const BlogListCard = ({ post, showTags = true }: BlogListCardProps) => (
  <Card 
    mb={[0, 2, 3]} 
    mx={[3, 2, 1]} 
    p={3}
    sx={{ 
      minHeight: ["200px", "250px", "300px"], 
      border: "1px solid", 
      borderRadius: "7px", 
      borderColor: "cardBorder",
      backgroundColor: "cardBackground",
      // boxShadow: theme => `1px 1px 7px 0px rgba(150, 150, 150, 0.4)`,
      ":hover": { 
        // textDecoration: "none", 
        border: "2px solid",
        borderColor: "tagBorder",
        backgroundColor: "transparent",
        // color: "tagText",
        // color: "tagBorder",
        cursor: "pointer",
        ".card-arrow-icon": {
          // animation: `0.5s linear 0s 1s bounce`,
          // color: "#FFF"
        }
      },
    }}
    onClick={(e) => {
      e.preventDefault();
      window.location.href=post.slug;
    }}
  >
    <Flex sx={{ flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <Box>
        {/* <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}> */}
          <Box sx={{ justifyContent: `right`, mb: 2 }}>
            {post.tags && showTags && (
              <React.Fragment>
                <ItemTags tags={post.tags} />
              </React.Fragment>
            )}
          </Box>
        {/* </Flex> */}
        <Text sx={{ fontSize: [3, 3, 4], color: `heading`, fontFamily: `Zilla Slab` }}>
          {post.title}
        </Text>
      </Box>
      <Flex sx={{ alignItems: `flex-end`, justifyContent: `space-between` }}>
        <Text className="card-arrow-icon" sx={{ fontSize: [1, 2, 2], transform: `scale(1.7)`, color: `heading` }}>
          <i className="fa fa-angle-double-right"></i>
        </Text>
        <Box sx={{ justifyContent: `right`, alignSelf: `flex-end` }}>
          <Text sx={{ color: `text`, mt: 1, fontSize: [1, 1, 1] }}>
            <i className="fa fa-calendar" sx={{ marginRight: `5px` }} />
            <time>{post.date}</time>
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Card>
);

export default BlogListCard;
