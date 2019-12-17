import React from "react";
import Head from "next/head";
import { RecipeProvider } from "../context/index";
import App from "../App";

const Home = () => (
  <RecipeProvider>
    <Head>
      <title>Leftovr | Recipe finder by ingredients</title>
      <link
        href="https://fonts.googleapis.com/css?family=Oswald|Raleway:400,600|Contrail+One"
        rel="stylesheet"
        key="google-font-cabin"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <App />
  </RecipeProvider>
);

export default Home;
