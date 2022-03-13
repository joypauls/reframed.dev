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
  { value: "date descending", label: "Date ↓", method: sortDateDescending},
  { value: "date ascending", label: "Date ↑", method: sortDateAscending},
  // { value: "alphabetical descending", label: "Alphabetical ↓" },
  // { value: "alphabetical ascending", label: "Alphabetical ↑" },
];

function sortDateDescending(p) {
  function compare(a, b) {
    a = Date.parse(a.date)
    b = Date.parse(b.date)
    if (a > b){
      return -1;
    }
    if (a < b){
      return 1;
    }
    return 0;
  }
  p.sort(compare);
  return p;
}

function sortDateAscending(p) {
  function compare(a, b) {
    a = Date.parse(a.date)
    b = Date.parse(b.date)
    if (a < b){
      return -1;
    }
    if (a > b){
      return 1;
    }
    return 0;
  }
  p.sort(compare);
  return p;
}

// this could all be abstracted nicer but who cares
function sortPosts(p, sort) {
  if (typeof sort.method === "function") {
    return sort.method(p);
  } else {
    return p;
  }
}

const filterOptions = [
  { value: "Math", label: "🧮 Math" },
  { value: "Statistics", label: "📈 Statistics" },
  { value: "Coding", label: "💻 Coding" },
];

// this could all be abstracted nicer but who cares
function filterPosts(p, filter) {
  // it is null when filter removed, but starts as []
  if (typeof filter === "object" && filter !== null && "value" in filter) {
    const match = (tags) => tags.name === filter.value;
    return p.filter(x => x.tags.some(match));
  }
  return p;
}


const SortDropdown = (props) => (
  <Select 
    options={props.options} 
    defaultValue={props.default} 
    placeholder="Select sorting method"
    name={props.name}
    onChange={props.onChange}
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
         backgroundColor: state.isFocused && props.theme.colors.primarySoft,
         color: state.isFocused ? "#ffffff" : props.theme.colors.text,
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
    onChange={props.onChange}
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
         backgroundColor: state.isFocused && props.theme.colors.primarySoft,
         color: state.isFocused ? "#ffffff" : props.theme.colors.text,
      })
    }}
  />
);

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const [sortMethod, setSortMethod] = useState({});
  const [filterMethod, setFilterMethod] = useState({});

  const onSortChange = value => {
    // console.log(values);
    setSortMethod(value);
  };

  const onFilterChange = values => {
    console.log(values);
    setFilterMethod(values);
  };

  return (
    <Layout>
      <SEO title="Writing" />
      <Title text="All Writing">
        <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)}>All Tags</Link>
      </Title>
      <Flex sx={{ width: "100%", justifyContent: "center", mb: 5 }}>
        <Box sx={{ width: ["60%", "40%", "30%"], mr: 2 }}>
          <Label htmlFor="sortSelection">Sort Posts</Label>
          <SortDropdown name="sortSelection" options={sortOptions} default={sortOptions[0]} theme={theme} onChange={onSortChange} />
        </Box>
        <Box sx={{ width: ["60%", "40%", "30%"], ml: 2 }}>
          <Label htmlFor="filterSelection">Filter Tags</Label>
          <FilterDropdown name="filterSelection" options={filterOptions} theme={theme} onChange={onFilterChange} />
        </Box>
      </Flex>
      <Listing posts={sortPosts(filterPosts(posts, filterMethod), sortMethod)} showTags={true} />
    </Layout>
  );
}

export default Blog;
