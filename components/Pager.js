import React, { useContext } from "react";
import Pagination from "rc-pagination";
import styled from "styled-components";
import { RecipeContext } from "../context/index";
import { BREAKPOINT, COLORS } from "./Constants";

const Wrapper = styled.div`
  ul {
    padding: 0;
    margin: 0;
    text-align: center;
  }
  li {
    list-style: none;
    display: inline-block;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${COLORS.mustard};
      a {
        color: ${COLORS.white};
      }
    }
  }
  @media (min-width: ${BREAKPOINT.tablet}) {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    li {
      display: flex;
      padding: 5px 10px;
      margin: 0 5px;
    }
  }

  a {
    display: flex;
    &:after {
      display: block;
    }
  }
  li:first-of-type a:after {
    content: "‹";
  }
  li[class*="rc-pagination-item-active"] {
    background-color: ${COLORS.mustard};
    a {
      color: ${COLORS.white};
    }
  }
  li[class="rc-pagination-jump-prev"] a:after {
    content: "‹‹";
  }
  li[class="rc-pagination-jump-next"] a:after {
    content: "››";
  }
  li[aria-disabled="true"] {
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
      a {
        color: ${COLORS.gray};
      }
    }
    a:after {
      color: ${COLORS.gray};
    }
  }
`;
export default function Pager() {
  const appContext = useContext(RecipeContext);
  const { current, handlePager, total } = appContext;

  return (
    <Wrapper>
      <Pagination
        onChange={e => handlePager(e)}
        defaultCurrent={current}
        current={current}
        total={total}
        locale="en_GB"
      />
    </Wrapper>
  );
}
