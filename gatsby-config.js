module.exports = {
    siteMetadata: {
        title: `Christian Kopac - Fullstack Developer`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/blog`,
                name: 'blog',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/work`,
                name: 'work'
            }
        },
        `gatsby-plugin-netlify-cms`,
    ],
}
