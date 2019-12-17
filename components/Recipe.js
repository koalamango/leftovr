import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from '../components/Constants';

const SearchResult = styled.div`
  background-color: ${COLORS.white};
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
  border-radius: 4px;
`;
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Source = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  background: ${COLORS.coral};
  padding: 7px 7px 7px 14px;
  font-size: 0.8rem;
  color: ${COLORS.white};
  &:before {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid ${COLORS.coral};
    border-bottom: 29px solid transparent;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
`;
const TextWrapper = styled.div`
  padding: 15px;
  display: inline-block;
  width: 100%;
`;
const Info = styled.div`
  span {
    font-size: 0.8rem;
    float: left;
  }
  span + span { float: right; }
`;

export default function Recipe({ recipe, serving }) {
  const { image, label, source, url, healthLabels, calories } = recipe;
  const perServing = Math.round(calories / serving);
  return (
    <>
      <SearchResult>
        <ImageWrapper>
          <img
            src={image}
            alt={label}
            className="img-card-top"
            style={{ height: "14rem" }}
          />
          <Source>{source}</Source>
        </ImageWrapper>
        <TextWrapper>
          <a href={url} rel="noopener noreferrer" target="_blank">
            <Title>{label}</Title>
          </a>
          <Info>
            <span>Serves {serving}</span>
            <span>Per serving: {perServing} kcal</span>
          </Info>
        </TextWrapper>
      </SearchResult>
    </>
  );
}
