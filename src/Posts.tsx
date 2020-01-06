import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { H1, P, ThemeProvider, theTimesTheme, UnorderedList } from "newskit";

const query = gql`
  query posts {
    posts @rest(type: "Posts", path: "posts") {
      id
      title
    }
  }
`;

export const Posts = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <P>Loading...</P>;
  if (error) return <P>Error :(</P>;

  return (
    <ThemeProvider theme={theTimesTheme}>
      <H1>POSTS</H1>
      {data.posts.slice(0, 10).map(post => (
        <UnorderedList key={post.id}>{post.title}</UnorderedList>
      ))}
    </ThemeProvider>
  );
};
