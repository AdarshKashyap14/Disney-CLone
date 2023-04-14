import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

const Trending = () => {
  const trending = useSelector(selectTrending);

  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {trending &&
          trending.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;

  h4 {
    margin-bottom: 10px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.25s ease-in-out;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }
`;

export default Trending;
