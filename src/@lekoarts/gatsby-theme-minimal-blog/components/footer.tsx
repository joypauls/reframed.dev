/** @jsx jsx */
import { jsx, Link, Flex } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import HeaderExternalLinks from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links";

const Footer = () => {
  const { author } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `center`,
        mt: [4, 5, 6],
        mb: 2,
        py: 3,
        px: 2,
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: `column`,
        variant: `dividers.footer`,
        fontSize: [0, 1, 1],
      }}
    >
      {/* <Flex sx={{justifyContent: "center", mb: [3, 4, 4]}}>
        <HeaderExternalLinks isEmphasized={true} />
      </Flex> */}
      <Flex sx={{justifyContent: "space-between", margin: "auto", width: ["100%", "100%", "80%"]}}>
        <span>
          &copy;{new Date().getFullYear()}
          {` `}
          <Link aria-label="Link to the site author's GitHub profile" target="_blank" href="https://github.com/joypauls">
            {author}
          </Link>
        </span>
        <Link rel="license" target="_blank" href="https://opensource.org/licenses/MIT">
            License For Code
        </Link>
      </Flex>
      {/* <div>
        Theme by
        {` `}
        <Link aria-label="Link to the site author's github profile" href="https://github.com/joypauls">
          joypauls
        </Link>
      </div> */}
    </footer>
  );
}

export default Footer;
