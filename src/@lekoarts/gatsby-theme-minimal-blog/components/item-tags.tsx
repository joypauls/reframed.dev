import React from "react";
import { Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";

type TagsProps = {
  tags: {
    name: string
    slug: string
  }[]
}

const tagStyle = {
  backgroundColor: "tagBackground",
  border: "1px solid",
  borderColor: "tagBorder",
  borderRadius: "5px",
  color: "tagText",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  textDecoration: "none",
  marginRight: "0.5rem",
  ":hover": { 
    textDecoration: "none", 
    // border: "1px solid",
    borderColor: "tagBorder",
    backgroundColor: "transparent",
    // color: "tagText",
    color: "tagBorder",
  },
  fontSize: 1,
}

const ItemTags = ({ tags }: TagsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `  `}
          <TLink as={Link} to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)} sx={tagStyle}>
            {tag.name}
          </TLink>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default ItemTags;
