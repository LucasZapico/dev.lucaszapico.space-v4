module.exports = {
  flags: {
    PARALLEL_SOURCING: true,
    LMDB_STORE: false,
    FAST_DEV: true,
    DEV_SSR: false,
    DEV_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
  siteMetadata: {
    title: 'dev.lucaszapico.space-v4',
    description: '',
    titleTemplate: '%s · Making stuff one day at a time',
    author: '@lucaszapico',
    siteUrl: 'https://dev.lucaszapico.space.netlify.app',
    baseUrl: 'dev.lucaszapico.space',
    contactEmail: 'connect@dev.lucaszapico.space',
    image: '/opengraph-gen.png',
    phone: '‪',
    address: 'Earth',
    twitterUsername: '@lucas_zpaico_10',
    facebookUsername: '',
    linkedInUsername: 'lucaszapico',
    redditUsername: '',
    youtubeUsername: '',
    instagramUsername: '',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-datocms',
    //   options: {
    //     apiToken: '',
    //   },
    // },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/base/layout.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
        __key: 'svgs',
      },
    },
  ],
}
