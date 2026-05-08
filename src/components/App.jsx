import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <>
    <Header name= "Newton's Life"/>
    <About />
    <ArticleList />
    <Article />
    </>

  );
}

export default App;
