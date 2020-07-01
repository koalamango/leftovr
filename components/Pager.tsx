import React, { useContext } from "react";
import Pagination from "rc-pagination";
import styled from "styled-components";
import { RecipeContext } from "../context/index";
import { BREAKPOINT, COLORS } from "../components/Constants";

const local_en_GB = {
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',

  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
};

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
  button {
    border: 0;
    background-color: transparent;
    &:hover, 
    &:focus,
    &:active,
    &:visited {
      border: 0;
    }
  }
  li:first-of-type button:after {
    content: "‹";
  }
  li[class*="rc-pagination-item-active"] {
    background-color: ${COLORS.mustard};
    a {
      color: ${COLORS.white};
    }
  }
  li[class="rc-pagination-jump-prev"] button:after {
    content: "‹‹";
  }
  li[class="rc-pagination-jump-next"] button:after {
    content: "››";
  }
  li[class="rc-pagination-next"] button:after {
    content: "›";
  }
  li[aria-disabled="true"] {
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
      button {
        color: ${COLORS.gray};
      }
    }
    button:after {
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
        locale={local_en_GB}
      />
    </Wrapper>
  );
}
