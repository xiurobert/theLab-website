module.exports = {
    siteMetadata: {
        title: `DerpZ Lab`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: ["gatsby-plugin-sass",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-fontawesome-css",
        "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }]
};