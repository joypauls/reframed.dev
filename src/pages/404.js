/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui";
import React from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";

const PageNotFound = () => (
    <Layout>
        <Flex sx={{mx: [1, 3, 6], justifyContent: "center", flexDirection: "column" }}>
            <Heading as="h2" variant="styles.h2">
                Page Not Found, My Bad 😬
            </Heading>
            {/* <p sx={{ color: `secondary`, mt: 3, fontSize: [2, 2, 3] }}>
                Doesn't look like anything is here, sorry!
            </p> */}
        </Flex>
    </Layout>
);

export default PageNotFound;
