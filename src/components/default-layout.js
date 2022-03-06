import React from "react"
import { MDXProvider } from "@mdx-js/react"
import ContactForm from "./contact"

const shortcodes = { ContactForm }
export default function Layout({ children }) {
  return (
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  )
}
