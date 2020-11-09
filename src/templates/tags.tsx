import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostItem, { PostList } from "../components/Post";
import styled from "styled-components";
import PageHelmet from "../components/BasicHelmet";

class TagRoute extends React.Component<any> {
  render() {
    const { allMarkdownRemark } = this.props.data;

    const posts = allMarkdownRemark.edges;
    const tag = this.props.pageContext.tag;
    const totalCount = allMarkdownRemark.totalCount;

    return (
      <Layout>
        <PageHelmet
          title={`태그 검색 - “${tag}”`}
          description={`junukim.dev에서 “${tag}” 태그로 검색한 결과입니다.`}
          url={`https://junukim.dev/tags/${tag}`}
        />
        <section className="section">
          <Header>
          {`태그 검색 -`}
            <TagName>{`“${tag}”`}</TagName>
            {`(${totalCount}건)`}
          </Header>
          <PostList>
            {posts.map(({ node: post }: any) => (
              <PostItem key={post.id} post={post} />
            ))}
          </PostList>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;

const Header = styled.h1`
  font-weight: normal;
  margin-bottom: 2em;
`;

const TagName = styled.strong`
  color: #ffa94d;
  margin-right: 4px;
`;