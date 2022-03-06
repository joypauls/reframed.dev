/** @jsx jsx */
import React from "react";
import { jsx, Card, Flex, Text, Link as TLink } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
// import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import "font-awesome/css/font-awesome.min.css";

import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero";
import FlashyCard from "./flashy-card";


const HeroContent = () => (
  <FlashyCard>
    <section sx={{ my: [1, 1, 2], ml: [1, 1, 2], p: { fontSize: [1, 2, 3], mt: [1, 1, 2] } }}>
      <Hero />
    </section>
  </FlashyCard>
);

export default HeroContent;
