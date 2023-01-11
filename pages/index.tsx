import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { RecipeProvider } from "../context/index";
import App from "../App";
import { COLORS, ImageAssets } from "../components/Constants";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  word-wrap: break-word;
  }
  body {
    color: #1c1a1a;
    font-family: Raleway, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .03rem;
    margin: 0 auto;
    background-repeat: no-repeat;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${ImageAssets.bg});
    background-size: cover;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Oswald, "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.0rem;
  }
  a {
    color: ${COLORS.mustard};
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    border: 0px;
    width: 100%;
  }
  img {
    border: 0px;
    width: 100%;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-family: "Contrail One", sans-serif;
  border: 3px double ${COLORS.white};
  border-radius: 50%;
  height: 90px;
  width: 95px;
  padding-top: 28px;
  box-shadow: 2px 2px 3px ${COLORS.black};
  margin: auto;
  text-align: center;
  color: ${COLORS.white};
  margin-top: 10px;
`;

const Footer = styled.div`
  margin: 30px 0 15px;
  text-align: center;
  color: ${COLORS.white};
`;

const Home = () => (
  <RecipeProvider>
    <Head>
      <title>Leftovr | Recipe finder by ingredients</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <GlobalStyle />
      <Logo>Leftovr</Logo>
      <App />
      <Footer>
        <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
      </Footer>
    </Container>
  </RecipeProvider>
);

export default Home;
