/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Heading, Box, Label, Radio, useThemeUI, Grid, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import Select from "react-select";


type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const sortOptions = [
  { value: "date descending", label: "Date ↓" },
  { value: "date ascending", label: "Date ↑" },
  { value: "alphabetical descending", label: "Alphabetical ↓" },
  { value: "alphabetical ascending", label: "Alphabetical ↑" },
];

const filterOptions = [
  { value: "math", label: "🧮 Math" },
  { value: "statistics", label: "📈 Statistics" },
  { value: "coding", label: "💻 Coding" },
];

const SortDropdown = (props) => (
  <Select 
    options={props.options} 
    defaultValue={props.default} 
    placeholder="Select sorting method"
    name={props.name}
    styles={{
      control: (provided, state) => ({
        ...provided,
        boxShadow: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: props.theme.colors.text
      }),
      menu: (provided, state) => ({
        ...provided,
        boxShadow: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: props.theme.colors.text,
      }),
      option: (provided, state) => ({
         ...provided,
         backgroundColor: state.isFocused && props.theme.colors.tagBackground,
         color: state.isFocused && "#ffffff",
      })
    }}
  />
);

const FilterDropdown = (props) => (
  <Select 
    options={props.options}
    placeholder="Filter by Tag"
    isClearable={true}
    name={props.name}
    styles={{
      control: (provided, state) => ({
        ...provided,
        boxShadow: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: props.theme.colors.text
      }),
      menu: (provided, state) => ({
        ...provided,
        boxShadow: "none",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: props.theme.colors.text,
      }),
      option: (provided, state) => ({
         ...provided,
         backgroundColor: state.isFocused && props.theme.colors.tagBackground,
         color: state.isFocused && "#ffffff",
      })
    }}
  />
);

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const [filters, setFilters] = useState([]);

  const onSelectChange = values => {
    console.log(values);
    setFilters(values);
  };

  return (
    <Layout>
      <SEO title="Writing" />
      <Title text="All Writing">
        <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)}>All Tags</Link>
      </Title>
      <Flex sx={{ width: "100%", justifyContent: "center", mb: 5 }}>
        <Box sx={{ width: ["60%", "40%", "30%"], mx: 2 }}>
          <Label htmlFor="sortSelection">Sort Posts</Label>
          <SortDropdown name="sortSelection" options={sortOptions} default={sortOptions[0]} theme={theme} />
        </Box>
        <Box sx={{ width: ["60%", "40%", "30%"], mx: 2 }}>
          <Label htmlFor="filterSelection">Filter Tags</Label>
          <FilterDropdown name="filterSelection" options={filterOptions} theme={theme} />
        </Box>
      </Flex>
      <Listing posts={posts} showTags={true} />
    </Layout>
  );
}

export default Blog;
