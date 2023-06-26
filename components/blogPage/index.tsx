import { useRouter } from "next/router"
import React, { useEffect } from "react"
import ErrorPage from "next/error"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps } from "next"
import PostBody from "../post-body"
import MoreStories from "../more-stories"
import PostHeader from "../post-header"
import SectionSeparator from "../section-separator"
import LayoutJs from "../layoutJs"
import Tags from "../tags"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api"
import { CMS_NAME } from "../../lib/constants"
import { Section, Container, HeroBannerPadding } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"
import styled from "styled-components"
import Link from "next/link"
import ServiceForm from "../Forms/ServiceForm"
import commentBox from "commentbox.io"

const BlogArticle = styled.article``

// Banner
const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const BannerWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${(props) => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 40vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 40vh;
    height: 100%;
  }
`

const BannerText = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const BannerBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

// Layout
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);
`

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: var(--clr-accent);
`

const BlogWrapper = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  h1,
  h2,
  h3. h4,
  h5,
  h6 {
    margin-top: 2em;
  }
  p {
    font-size: 1.2rem;
  }
`

export default function PostPage({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    commentBox("5661567546818560-proj")
  }, [])

  return (
    <LayoutJs>
      {post.featuredImage ? (
        <BannerGrid>
          <BannerWrapper img={post.featuredImage?.node.sourceUrl}>
            <Container className="spacing">
              <BannerText className="spacing">
                <div className="">
                  <h1 className="title">{post.title}</h1>
                </div>
              </BannerText>
            </Container>
          </BannerWrapper>
        </BannerGrid>
      ) : null}

      <Section>
        <Container className="spacing">
          <BlogWrapper>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* 

            <SectionSeparator />
            {morePosts.len
              gth > 0 && <MoreStories posts={morePosts} />}
          </> */}
            <div className="commentbox" />
          </BlogWrapper>
        </Container>
      </Section>
    </LayoutJs>
  )
}
