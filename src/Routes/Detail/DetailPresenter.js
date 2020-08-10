import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import MovieDetail from "../../Components/MovieDetail";
import ShowDetail from "../../Components/ShowDetail";
import MovieProduction from "../../Components/MovieProduction";
import ShowProduction from "../../Components/ShowProduction";
import Season from "../../Components/Season";
import { useLocation, Link, Route } from "react-router-dom";

const imageBaseUrl = `https://image.tmdb.org/t/p/original`;
const imdbBaseUrl = `https://www.imdb.com/title/`;

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  box-sizing: border-box;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  /* background-repeat: no-repeat; */
  background-repeat: repeat-y;
  background-size: cover;
  filter: blur(1px);
  opacity: 0.4;
  z-index: 0;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 3px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-left: 10px;
  padding: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 20px;
  background-color: gold;
  font-size: 0.8rem;
  font-weight: 700;
  color: black;
  border-radius: 5px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
`;

const Item = styled.span``;

const EngTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 5px;
  padding-left: 5px;
`;

const Divider = styled.span`
  margin: 0px 10px;
`;

const Overview = styled.p`
  margin-top: 15px;
  width: 80%;
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.8;
  overflow-y: auto;
  text-overflow: ellipsis;
`;

const DetailContainer = styled.div`
  margin-top: 15px;
  width: 80%;
  height: 57vh;
  /* border: 2px solid gold; */
  background-color: rgba(131, 149, 167, 0.7);
  opacity: 0.8;
  overflow-y: auto;
  padding: 10px 10px;
  position: relative;
`;

const DetailBtnContainer = styled.div``;

const DetailRenderContainer = styled.div``;

const DetailButton = styled.button`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #3498db;
  padding: 5px;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? "#3498db" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#2f3542")};
`;

const DetailPresenter = ({ result, loading, error }) => {
  const location = useLocation();
  let isMovie = false;

  if (location.pathname.includes(`/movie/`)) {
    isMovie = true;
  }

  return loading ? (
    <>
      <Helmet>
        <title>Loading... | QFlix</title>
      </Helmet>
      <Loader></Loader>
    </>
  ) : (
    <>
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | QFlix
          </title>
        </Helmet>
        <Backdrop
          bgImage={
            result.backdrop_path
              ? `${imageBaseUrl}${result.backdrop_path}`
              : null
          }
        ></Backdrop>

        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `${imageBaseUrl}${result.poster_path}`
                : require("../../assets/noPosterSmall.png")
            }
          ></Cover>
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}

              {result.imdb_id ? (
                <Icon>
                  <a target="_blank" href={`${imdbBaseUrl}${result.imdb_id}`}>
                    IMDb
                  </a>
                </Icon>
              ) : null}
            </Title>
            <EngTitle>
              {result.original_language === "en" ? null : result.title}
            </EngTitle>
            <EngTitle>
              {result.original_language === "en" ? null : result.name}
            </EngTitle>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>●</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                min
              </Item>
              <Divider>●</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
            </ItemContainer>
            <Overview>{result.overview && result.overview}</Overview>
            <DetailContainer>
              <DetailBtnContainer>
                <DetailButton active={location.pathname.includes(`/trailers`)}>
                  <Link
                    to={
                      isMovie
                        ? `/movie/${result.id}/trailers`
                        : `/show/${result.id}/trailers`
                    }
                  >
                    Trailers
                  </Link>
                </DetailButton>
                <DetailButton
                  active={location.pathname.includes(`/productions`)}
                >
                  <Link
                    to={
                      isMovie
                        ? `/movie/${result.id}/productions`
                        : `/show/${result.id}/productions`
                    }
                  >
                    Production
                  </Link>
                </DetailButton>
                {isMovie ? null : (
                  <DetailButton active={location.pathname.includes(`/seasons`)}>
                    <Link to={`/show/${result.id}/seasons`}>Seasons</Link>
                  </DetailButton>
                )}
              </DetailBtnContainer>
              <DetailRenderContainer>
                {isMovie ? (
                  <Route path="/movie/:id/trailers" component={MovieDetail} />
                ) : (
                  <Route path="/show/:id/trailers" component={ShowDetail} />
                )}

                {isMovie ? (
                  <Route
                    path="/movie/:id/productions"
                    component={MovieProduction}
                  />
                ) : (
                  <Route
                    path="/show/:id/productions"
                    component={ShowProduction}
                  />
                )}

                {isMovie ? null : (
                  <Route path="/show/:id/seasons" component={Season} />
                )}
              </DetailRenderContainer>
            </DetailContainer>
          </Data>
        </Content>
      </Container>
    </>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
