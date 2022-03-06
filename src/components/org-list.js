/** @jsx jsx */
/** Based on Listing component from @lekoarts/gatsby-theme-minimal-blog */
import { jsx } from "theme-ui";
import { OrgListItem } from "./org-list-item";

const currentOrgs = [
    {
        name: "test1",
        description: "more test1",
        link: "https://gatsbyjs.com",
    },
    {
        name: "test2",
        description: "more test2",
        link: "https://gatsbyjs.com",
    },
    {
        name: "test3",
        description: "more test3",
        link: "https://gatsbyjs.com",
    },
]


const OrgList = () => (
  <section sx={{ mb: [5, 6, 7] }}>
    {currentOrgs.map((org) => (
      <OrgListItem org={org} />
    ))}
  </section>
);

export default OrgList;
