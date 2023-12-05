import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {/* Map over the posts array and render an Article for each post */}
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
