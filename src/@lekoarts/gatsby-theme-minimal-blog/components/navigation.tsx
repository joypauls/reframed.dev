/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import {replaceLinkName, stringIsFaIcon} from "./utils/mapping"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}


const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {nav && nav.length > 0 && (
        <nav sx={{ 
            "a:not(:last-of-type)": { mr: 3 }, 
            // fontSize: [1, `18px`], 
            fontSize: [1, 2, 2],
            // fontFamily: `Mulish`,
            ".active": { 
                color: `heading`,
            },
        }}>
          {nav.map((item) => {
            let l = replaceLinkName(item.title);
            return (
              <TLink 
                key={item.slug} 
                className={stringIsFaIcon(l) ? l : ""}
                as={Link} 
                activeClassName="active" 
                to={replaceSlashes(`/${basePath}/${item.slug}`)} 
                sx={{
                  transform: stringIsFaIcon(l) ? `scale(1.2)` : `scale(1)`,
                  ":hover": {
                      // color: `#FFF`,
                      // fontWeight: `bold`
                      // textDecoration: `underline`,
                      // backgroundColor: `heading`,
                  },
                }}
              >
                {stringIsFaIcon(l) ? "" : l}
              </TLink>
            );
          })}
        </nav>
      )}
    </React.Fragment>
  );
}

export default Navigation;
