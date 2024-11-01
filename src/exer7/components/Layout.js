import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Home Page</h1>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/Post">Post List</Link>&nbsp;|&nbsp;
        <Link to="/WritePost">Write Post</Link>
      </header>
      <main>{children}</main>
    </>
  );
}
