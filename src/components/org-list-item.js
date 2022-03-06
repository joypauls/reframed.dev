/** @jsx jsx */
/** Based on BlogListItem component from @lekoarts/gatsby-theme-minimal-blog */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";


const OrgListItem = (org) => (
  <Box mb={4}>
    <TLink as={Link} to={org.link} sx={{ fontSize: [1, 2, 3], color: `heading` }}>
      {org.name}
    </TLink>
    <p sx={{ color: `secondary`, mt: 1, fontSize: [1, 1, 2] }}>
      {/* {post.tags && showTags && (
        <React.Fragment>
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )} */}
    </p>
  </Box>
);

export default OrgListItem;