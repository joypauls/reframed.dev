/** @jsx jsx */
import * as React from "react";
import { Global } from "@emotion/react";
import { Box, Container, Divider, jsx } from "theme-ui";
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import Header from "@lekoarts/gatsby-theme-minimal-blog/src/components/header";
import Footer from "@lekoarts/gatsby-theme-minimal-blog/src/components/footer";
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code";
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav";


type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        // "::selection": {
        //   backgroundColor: theme.colors.text,
        //   color: theme.colors.background,
        // },
        a: {
          // transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
        ".gatsby-resp-image-wrapper": {
          boxShadow: `none !important`,
          marginTop: `2rem !important`,
          marginBottom: `1rem !important`,
        },
        ".gatsby-resp-image-figure": {
          marginLeft: `0 !important`,
          marginRight: `0 !important`,
        },
        figcaption: {
          textAlign: `center`,
          fontSize: theme.fontSizes[1],
          fontStyle: `italic`,
        },
      })}
    />
    <Seo />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Header />
    <Container>
      {/* <Header /> */}
      <Box 
        id="skip-nav" 
        sx={{
          ...CodeStyles, 
          px: [1, 0, 0],
          flex: 1, 
          flexDirection: "column", 
          display: "flex", 
          justifyContent: "flex-start"
        }} 
        className={className}
      >
        {children}
      </Box>
    </Container>
    <Footer />
  </React.Fragment>
)

export default Layout;
