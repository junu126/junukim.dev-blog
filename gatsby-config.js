module.exports = {
  siteMetadata: {
    title: "junukim.dev",
    description: "안녕하세요! 소설 읽는 것을 좋아하는 김준우입니다.",
    siteUrl: "https://junukim.dev",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            setup: (locals) => {
              return {
                ...locals,
                ...locals.query.site.siteMetadata,
                site_url: "https://junukim.dev/",
                feed_url: "https://junukim.dev/feed.xml",
              };
            },
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                const articleUrl = `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`;

                return {
                  ...edge.node.frontmatter,
                  url: articleUrl,
                  guid: articleUrl,
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      fields { slug }
                      frontmatter {
                        title
                        description
                        date
                        tags
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: "gatsby-remark-prismjs",
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-102906433-1",
    //     respectDNT: true,
    //     exclude: ["/public/**", "/admin/**"]
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.js`
    //   }
    // },
    // "gatsby-plugin-netlify"
  ],
};
