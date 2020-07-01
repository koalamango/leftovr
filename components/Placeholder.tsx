import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import { BREAKPOINT, COLORS } from "../components/Constants";

const Wrapper = styled.div`
  display: block;
  grid-column-gap: 2%;
  @media (min-width: ${BREAKPOINT.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${BREAKPOINT.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${BREAKPOINT.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Preloader = styled.div`
  background-color: ${COLORS.white};
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
  border-radius: 4px;
  display: flex;
  height: 300px;
  width: 100%;
  position: relative;

  > span {
    align-self: center;
    text-align: center;
    width: 100%;
  }
`;

const createBlock = () => {
  let block = [];

  for (let i = 0; i < 8; i++) {
    block.push(
      <Preloader key={i}>
        <span>
          <Spinner />
        </span>
      </Preloader>
    );
  }
  return block;
};

export default function Placeholder() {
  return <Wrapper>{createBlock()}</Wrapper>;
}
