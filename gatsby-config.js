import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Pat Williams Music`,
    siteUrl: `https://patwilliamsmusic.netlify.app/`,
    description: `Listen to music by singer/song-writer Patrick Williams. Learn about the artist, his work, his upcoming performances.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Change plugin default options here, e.g.:
        // ssr: false
        // displayName: false,
        // minify: false
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`,
        path: `${__dirname}/src/data/audio`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        failOnError: true,
      },
    },
    `gatsby-transformer-sharp`,
    // {
    //   resolve: "gatsby-source-sanity",
    //   options: {
    //     projectId: "0jfvvkkd",
    //     dataset: "production",
    //     watchMode: true,
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
  ],
};
