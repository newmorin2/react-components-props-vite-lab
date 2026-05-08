import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <>
    <Header name= "Tech Blog"/>
    <About about = "A tech blog about technologoy" />
    <ArticleList />
    <Article />
    </>

  );
}

export default App;
