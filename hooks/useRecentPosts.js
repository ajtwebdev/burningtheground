import { gql } from "@apollo/client";

export const USE_RECENT_POSTS = gql`
    allWpPost(limit: 3) {
        nodes {
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              slug
            }
          }
          title
          uri
        }
      }
    }
`;
