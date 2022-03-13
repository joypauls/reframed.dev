/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `text`, textDecoration: `none` }}
    >
      <div sx={{
        my: 0, 
        // fontWeight: `bold`,
        fontSize: [3, 3, 3], 
        fontFamily: `Zilla Slab`,
        // fontFamily: `Karma`,
        // fontStyle: `italic`,
        display: `flex`,
        alignItems: `center`,
      }}>
        {siteTitle}
        {`  `}
        <img role="img" aria-label="logo" src="logo.png" sx={{ height: [`2.5rem`, `2.5rem`, `2.5rem`], ml: `1rem` }} />
      </div>
    </Link>
  );
}

export default HeaderTitle;
