import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from '../components/Layout';
import BasicHelmet from '../components/BasicHelmet';
import PostItem, { PostList, Post } from "../components/Post";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: Post;
      }>;
    };
  };
}

export default class IndexPage extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    const now = new Date();
    const today = `${now.getFullYear()}년 ${now.getMonth() +
      1}월 ${now.getDate()}일 현재`;
      
    return (
      <Layout>
        <BasicHelmet
          title="junukim.dev"
          description="안녕하세요! 소설 읽는 것을 좋아하는 김준우입니다."
          url="https://junukim.dev/"
        />
        <section className="section">
          <Summary>
            <Intro>
              <IntroTitle>안녕하세요!</IntroTitle>
              소설 읽는 것을 좋아하는 <Strong>김준우</Strong>입니다. 🤗
              <LineBreak />
              <LineBreak />
              매번 읽을 때마다 기대되는 <Strong>소설</Strong>처럼, 모르는 사람들과 친해지기를 원하는<br /> 웹 개발자입니다.
              <LineBreak />
              <LineBreak />
              {today} 총 {posts.length}
              편의 글이 올라와 있습니다.
            </Intro>
          </Summary>
          <PostList>
            {posts.map(({ node: post }) => (
              <PostItem key={post.id} post={post} />
            ))}
          </PostList>
        </section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
        }
      }
    }
  }
`;

const Summary = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #eaebec;
  line-height: 1.6;
`;

const Intro = styled.h1`
  font-size: 1em;
  font-weight: normal;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const IntroTitle = styled.div`
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 1.2em;
`;

const LineBreak = styled.br`
  margin: 12px 0;
`;

const Strong = styled.strong`
`;