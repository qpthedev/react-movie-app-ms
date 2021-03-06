import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { moviesApi } from "../api";
import Loader from "./Loader";

const embedBaseUrl = `https://www.youtube.com/embed/`;

const Container = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.div`
  width: 80%;
  font-size: 1rem;
  border-bottom: 1px solid white;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const VideoContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

export default function useMovie() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  let params = useParams();

  const updateMovie = async () => {
    try {
      // console.log(params.id);
      const { data } = await moviesApi.movieDetail(params.id);
      // setDetail(data);
      // console.log(data);
      setDetail(data);
      setVideos(data.videos.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateMovie();
  }, []);

  return loading ? (
    <Loader></Loader>
  ) : (
    <>
      <Container>
        <Title>Trailers</Title>
        {videos &&
          videos.map((video, index) => (
            <VideoContainer key={video.id}>
              <Container>
                Trailer #{index + 1}: <br />
              </Container>
              <iframe
                width="550"
                height="300"
                src={`${embedBaseUrl}${video.key}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            </VideoContainer>
          ))}
      </Container>
    </>
  );
}
