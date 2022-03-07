/** @jsx jsx */
import { 
  jsx, 
  // useColorMode 
} from "theme-ui";
import { Flex } from "@theme-ui/components";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
// import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle";
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation";
import HeaderTitle from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-title";
import HeaderExternalLinks from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links";

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig();
  // const [colorMode, setColorMode] = useColorMode();
  // const isDark = colorMode === `dark`;
  // const toggleColorMode = (e: any) => {
  //   e.preventDefault();
  //   setColorMode(isDark ? `light` : `dark`);
  // }

  return (
    <header sx={{ 
      mb: [4, 5],
      py: 3,
      variant: `dividers.header`,
      px: 2,
    }}>
      <Flex sx={{ 
        alignItems: `center`, 
        justifyContent: `space-between`, 
        margin: "auto", 
        width: ["100%", "100%", "80%"],
      }}>
        <HeaderTitle />
        {/* <ColorModeToggle isDark={isDark} toggle={toggleColorMode} /> */}
        <div
          sx={{
            boxSizing: `border-box`,
            pb: 1,
            mt: 2,
            color: `secondary`,
            a: { color: `secondary`, ":hover": { color: `heading` } },
            flexFlow: `wrap`,
          }}
        >
          <Navigation nav={nav} />
        </div>
      </Flex>
      {/* <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          // variant: `dividers.bottom`,
          pb: 1,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 2,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
          // fontFamily: `Gabriela`,
        //   fontStyle: `italic`,
        }}
      >
        <Navigation nav={nav} />
        <HeaderExternalLinks isEmphasized={false} />
      </div> */}
    </header>
  );
}

export default Header;
