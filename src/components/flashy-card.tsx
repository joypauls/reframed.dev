/** @jsx jsx */
import React from "react";
import { jsx, Card, Flex, Text, Link as TLink } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
// import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import "font-awesome/css/font-awesome.min.css";

import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero";

// type FlashyCardProps = {
//   post: {
//     slug: string
//     title: string
//     date: string
//     excerpt: string
//     description: string
//     timeToRead?: number
//     tags?: {
//       name: string
//       slug: string
//     }[]
//   }
//   showTags?: boolean
// }

const FlashyCard = (props) => (
  <Card mb={4} mx={1} p={3} 
    sx={{ 
      width: ["90%", "70%", "50%"],
      maxWidth: "600px",
      minHeight: [null, null, "200px"], 
      border: `1px solid`, 
      borderRadius: "7px", 
      borderColor: "cardBorder",
      backgroundColor: "cardBackground",
      // border: `2px solid`, 
      // borderRadius: "0", 
      // borderColor: "cardBorder",
      // // boxShadow: '12px 12px rgba(0, 0, 0), 12px 12px 0 3px black',
      // boxShadow: theme => `8px 8px transparent, 8px 8px 0 2px ${theme.colors.cardBorder}`,
      // boxShadow: theme => `8px 8px ${theme.colors.cardBackground}, 8px 8px 0 2px ${theme.colors.cardBorder}`,
      // // boxShadow: theme => `8px 8px ${theme.colors.tagBackground}`,
    }}
  >
    <Flex sx={{ flexDirection: `column`, justifyContent: `space-between`, height: "100%",}}>
      <Box>
        {props.children}
      </Box>
    </Flex>
  </Card>
);

export default FlashyCard;

