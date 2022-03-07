/** @jsx jsx */
import { jsx, Flex, Heading, Button, Text } from "theme-ui";
import { Link } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils";
// @ts-ignore
import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero";
// @ts-ignore
import Bottom from "@lekoarts/gatsby-theme-minimal-blog/src/texts/bottom";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";

// import SignalAnimation from "../../../components/signal-animation";
// import HeroContent from "../../../components/hero-content";


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

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();

  return (
    <Layout>
      <SEO title="Reference Frame" />
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      {/* <Flex sx={{ alignItems: `center`, justifyContent: `center`}}>
        <HeroContent />
      </Flex> */}
      <section sx={{mt: [3, 3, 3], mb: [5, 5, 6], fontSize: [3, 3, 3], mx: [3, 5, 6]}}>
        {/* <Flex sx={{justifyContent: "center"}}>
          <Text sx={{fontSize: [3, 4, 5], variant: "text.heading"}}>Welcome 🌼 I'm Joy</Text>
        </Flex> */}
        <Hero />
        {/* <Flex sx={{justifyContent: "center"}}>
          <Button variant="primary" sx={{borderRadius: "5px", fontSize: [2, 3, 3], py: 2}}>Explore!</Button>
        </Flex> */}
      </section>
      <Title text="Latest">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>View All</Link>
      </Title>
      <Listing posts={posts} showTags={true} />
      {/* <List sx={{ variant: `section_bottom` }}>
        <Bottom />
      </List> */}
    </Layout>
  );
}

export default Homepage;
