import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { tvApi } from "../api";
import Loader from "./Loader";

const imageBaseUrl = `https://image.tmdb.org/t/p/w300`;

const Container = styled.div`
  width: 100%;
  /* border: 2px solid red; */
`;

const Title = styled.div`
  width: 80%;
  font-size: 1rem;
  border-bottom: 1px solid white;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Poster = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 20px;
`;

export default function useSeason() {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  let params = useParams();

  const updateSeasons = async () => {
    try {
      const { data } = await tvApi.showDetail(params.id);
      setSeasons(data.seasons);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateSeasons();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Title>Season List</Title>
        {seasons.map((season) => (
          <Container key={season.id}>
            <Item>
              <Poster
                bgImage={
                  season.poster_path
                    ? `${imageBaseUrl}${season.poster_path}`
                    : null
                }
              ></Poster>
              {season.name}
            </Item>
          </Container>
        ))}
      </Container>
    </>
  );
}
