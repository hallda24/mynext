import Head from "next/head";
import React, { Component } from "react";
import Link from "next/link";

export default function Home() {
  const App = 53;

  return (
    <>
      <h1>About</h1>
      <p>{App}</p>
      <Link href="/">
        <a>this page!</a>
      </Link>
    </>
  );
}
