require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  
  siteMetadata: {
    title: "dev.lucaszapico.space-v4",
    description: "",
    titleTemplate: "%s · Making stuff one day at a time",
    author: "@lucaszapico",
    siteUrl: "https://dev.lucaszapico.space",
    baseUrl: "dev.lucaszapico.space",
    contactEmail: "connect@dev.lucaszapico.space",
    image: "/opengraph-gen.png",
    phone: "‪",
    address: "Earth",
    twitterUsername: "@lucas_zapico_10",
    facebookUsername: "",
    linkedInUsername: "lucaszapico",
    redditUsername: "",
    youtubeUsername: "",
    instagramUsername: "",
  },

  plugins: [
    "gatsby-plugin-root-import",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-plugin-exclude",
      options: { paths: ["/templates/**", ".vault-stats*"] },
    },    
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            
          ]
          
        },
        
      },
    },
    `gatsby-plugin-mdx-embed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/base/layout/layout.js"),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
        __key: "svgs",
      },
    },
  ],
}
