import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'

const query = gql`
  query posts {
    posts @rest(type: "Posts", path: "posts") {
      id,
      title
    }
  }
`;


export const Posts = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>POSTS</h1>
      <ul>{data.posts.slice(0,10).map(post => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
}