import Head from "next/head";
import Link from "next/link";
import React, { Component } from "react";

export default function Home() {
  const App = 23;

  return (
    <>
      <h1>Hello</h1>
      <h1 className="title">
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </h1>
      <p>{App}</p>
    </>
  );
}
