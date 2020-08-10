import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { tvApi } from "../api";
import Loader from "./Loader";

const imageBaseUrl = `https://image.tmdb.org/t/p/w300`;

const Container = styled.div`
  width: 100%;
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
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 20px;
`;

export default function useShowProd() {
  const [companies, setCompanies] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  let params = useParams();

  const updateShowProd = async () => {
    try {
      const { data } = await tvApi.showDetail(params.id);
      setCompanies(data.production_companies);
      setCountries(data.origin_country);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateShowProd();
  }, []);

  //

  return loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Title>Production Company</Title>
        {companies.map((company, index) => (
          <Container key={company.id}>
            <Item>
              <Logo
                bgImage={
                  company.logo_path
                    ? `${imageBaseUrl}${company.logo_path}`
                    : null
                }
              ></Logo>
              {company.name}
            </Item>
          </Container>
        ))}
      </Container>
      <Title>Production Country</Title>
      <Container>
        {countries.map((country, index) => (
          <Item key={index}>{country}</Item>
        ))}
      </Container>
    </>
  );
}
