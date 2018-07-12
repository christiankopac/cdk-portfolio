import React from "react";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark; 
  return ( 
      <div>
        <h1>{ frontmatter.title }</h1>
        <h2>{ frontmatter.date }</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
  );
}

export const pageQuery = graphql `
  query BlogPostByPath($path: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}}
    ) {  
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            excerpt
            path
          }
          html
        }
      }
    }
`;