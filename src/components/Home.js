import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from 'firebase/firestore';


const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    console.log("Hello");
    const fetchMovies = async () => {
      const recommends = [];
      let newDisneys = [];
      let originals = [];
      let trending = [];
      try {
        const querySnapshot =  await getDocs(collection(db, 'movies'));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          const movie = {
            id: doc.id,
            ...doc.data(),
          };
          switch (movie.type) {
            case "recommend":
              recommends.push(movie);
              break;
            case "new":
              newDisneys.push(movie);
              break;
            case "original":
              originals.push(movie);
              break;
            case "trending":
              trending.push(movie);
              break;
            default:
              break;
          }
        });
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [dispatch, userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  z-index:2;
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;