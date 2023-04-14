import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";

const Recommends = () => {
  const recommendMovies = useSelector(selectRecommend);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {recommendMovies &&
          recommendMovies.map((movie, key) => (
            <Wrap key={key}>
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
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Recommends;
