import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article"
console.log(blogData);

function App() {
  return (
    <>
    <Header name= "Tech Blog"/>
    <About image = '/demo.png' about = "A tech blog about technology" />
    <ArticleList posts = {blogData.posts} />
    </>

  );
}

export default App;
