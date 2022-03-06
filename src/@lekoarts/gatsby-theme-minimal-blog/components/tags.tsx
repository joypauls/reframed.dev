/** @jsx jsx */
import { jsx, Link as TLink, Heading, Box, Flex } from "theme-ui"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <Seo title="Tags" />
      <Heading as="h1" variant="styles.h1">
        Tags
      </Heading>
      <Box mt={[4, 5, 5]}>
        <Flex sx={{justifyContent: "center"}}>
          <table>
            {list.map((listItem) => (
              <tr sx={{my: 2}}>
                <td>
                  <TLink
                    as={Link}
                    sx={{ variant: `links.listItem`, mr: 2 }}
                    to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
                  >
                    {listItem.fieldValue}
                  </TLink>
                </td>
                <td>
                  <Flex>
                    <div sx={{
                      width: (listItem.totalCount * 1.5).toString().concat("rem"), 
                      height: "1.5rem", 
                      backgroundColor: "tagBackground",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "tagBorder",
                      color: "transparent",
                      mx: 2
                    }} />
                    <span sx={{color: `secondary`, variant: `links.listItem`}}>({listItem.totalCount})</span>
                  </Flex>
                </td>
                <td></td>
              </tr>
            ))}
          </table>
        </Flex>
      </Box>
    </Layout>
  )
}

export default Tags;
