// graphQL data layer
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'A new blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '9hw7eex7jfrb',
        accessToken: 'ab432781b63efcf05fe38ef90a3585d7d4a00736884b397602d79402168eab26'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark'
  ],
}

// pathPrefix: "/levelupgatsby", // same as repo name or whatever you want