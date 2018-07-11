module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/pages/blog/`,
                name: 'blog',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/pages/work/`,
                name: 'work'
            }
        },
        `gatsby-transformer-remark`,
    ],
}
