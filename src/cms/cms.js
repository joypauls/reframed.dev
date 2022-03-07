import CMS from "netlify-cms-app";
import React from "react";

function Post({ title, children }) {
  <article>
    <h1>{title}</h1>
    {children}
  </article>
}

const PostPreview = ({ entry, widgetFor }) => (
  <Post title={entry.getIn(['data', 'title'])}>
    <section dangerouslySetInnerHTML={{ __html: widgetFor('body') }} />
  </Post>
);

CMS.registerPreviewTemplate("post", PostPreview);
