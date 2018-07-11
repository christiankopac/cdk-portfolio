# CDK's Portfolio

## Inspiration

- https://aninterestingday.com/

## Run Scripts

- npm run develop
    gatsby develop
- npm run build
    gatsby build",
- serve
    gatsby serve

## Plugins

### Core

- [x] gatsby
- [x] gatsby-link

### Netlify

- [x] gatsby-plugin-netlify-cms
- [x] netlify-cms

### Markdown

- [x] gatsby-source-filesystem
- [x] gatsby-transformer-remark
- [Remark Plugins](https://www.npmjs.com/search?q=gatsby-remark)

### SEO

- [x] [gatsby-plugin-react-helmet](https://github.com/nfl/react-helmet/)
- [ ] gatsby-plugin-google-analytics

## Other

- src/layouts/
    Is where you put wrapper components.
    Markup that will generally "go around" your individual pages. This usually means headers and footers.
- src/pages/
    It's where the content goes. The rule of thumb is that you should construct your src/pages directory to build your URLs.

## Documentation

- TODO: Watch https://www.youtube.com/watch?v=n1NaVkKdrwc&t=903s
- TODO: Watch https://www.youtube.com/watch?v=VxVKMJThh04
- TODO: Read https://www.gatsbyjs.org/blog/2017-10-01-migrating-my-blog-from-hexo-to-gatsby/

## TODO
- TODO: filter query by path /work

```graphql
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: {fileAbsolutePath: {regex: "/(work)/.*\\.md$/"}}
  ) {  edges {
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
}
```

- TODO: filter query by path /blog

```graphql
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}}
  ) {  edges {
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
}
```