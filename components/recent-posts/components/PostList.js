import React from "react";
import LayoutJs from "../../layoutJs";
import { Container, Section } from "../..//layoutComponents";
import Link from "next/link";
import styled from "styled-components";
import Seo from "../../seo";
import { postPathBySlugCategory } from "../../../lib/posts";

const Excerpt = styled.div`
  font-size: var(--fs-sm);
`;

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 26%;
`;

const StyledCardContainer = styled.div`
  padding: 10px;
  color: black;
`;

const CategoryContainer = styled.div`
  h2 {
    border-bottom: 1px solid #80808091;
    padding: 4px;
    margin-bottom: 14px;
  }
`;

const CategoryPostContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const PostContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const PostHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const PostList = ({ posts }) => {
  return (
    <Section>
      <PostHeading>Recent Posts</PostHeading>
      <PostContainer>
        {(posts && Object.keys(posts).length > 0) ? Object.keys(posts).map((cat_id, index) => {
          const catgoryPost = posts[cat_id] || {};
          return (
            <CategoryContainer key={index}>
              <h2>{catgoryPost?.categoryName}</h2>
              <CategoryPostContainer>
              {catgoryPost?.posts?.slice(0,6)?.map((post, index) => {
                const categorySlug =
                  post?.categories?.edges?.length > 0
                    ? post?.categories?.edges[0]?.node?.slug
                    :  post?.categories[0]?.slug;

                return (
                  <StyledCard key={index}>
                  <Link
                  className="spacing accent"
                  href={postPathBySlugCategory(
                    post.slug,
                    categorySlug
                  )}
                >
                    <img src={post?.featuredImage?.sourceUrl || post?.featuredImage?.node?.sourceUrl} alt="Avatar"></img>
                    <StyledCardContainer>
                      <h4><b> {post?.title}</b></h4> 
                      <Excerpt
                        dangerouslySetInnerHTML={{ __html: post?.excerpt }}
                      />
                    </StyledCardContainer>
                    </Link>
                  </StyledCard>
                 
                );
              })}
              </CategoryPostContainer>
            </CategoryContainer>
          );
        }): <h2>No Recent Post Found!</h2>}
 
      </PostContainer>
    </Section>
  );
};
export default PostList;
