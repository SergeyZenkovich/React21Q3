import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {FetchObject} from "src/interfaces/ComponentsInterfaces";
import styled from "styled-components";
import fontPBold from "../../assets/fonts/MavenPro-Bold.ttf";
import Card from "../Card/Card";

import {StyledDetailsPage} from "./DetailsPageStyling";

const useFetchDataByID = (id: string): [FetchObject, () => Promise<void>] => {
  const [fetchingElem, setFetchingElem] = useState({} as FetchObject);
  const API_KEY = "usJhdOuMAY8QeXFMb6GhSKgSGbOn5pH7SzDM9NPT-f0";

  const fetchDataAsync = async (): Promise<void> => {
    const result = await (
      await fetch(`https://api.unsplash.com/photos/${id}/?client_id=${API_KEY}`)
    ).json();
    setFetchingElem(result);
  };
  return [fetchingElem, fetchDataAsync];
};

const DetailsPage = ({
  setActivePage
}: {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  const {id} = useParams<{id?: string}>();
  const [fetchingElem, makeFetch] = useFetchDataByID(id);
  useEffect(() => {
    makeFetch();
    setActivePage("");
  }, [setActivePage, makeFetch]);
  return (
    <StyledDetailsPage>
      <h3>Details Page</h3>
      <Card {...fetchingElem} />
    </StyledDetailsPage>
  );
};

export default DetailsPage;
