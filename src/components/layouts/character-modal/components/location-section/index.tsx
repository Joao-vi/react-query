import React from "react";

import { useLocation } from "services/use-location";
import { useResidents } from "services/use-residents";
import { useLocationId } from "services/user-location-id";
import { ContentContainer } from "../../styles";
import { ContentCard } from "../content-card";

interface ILocationSection {
  name: string;
  url: string;
}

type TCurrentPage = {
  start: number;
  end: number;
};
const handlePaginate = (state: TCurrentPage, residentsIds) => {
  const qtdPages = Math.ceil(residentsIds.length / 4);
  const hasPages = state.end <= qtdPages;
  return hasPages ? { start: 4 + state.start, end: state.end + 4 } : state;
};

export const LocationSection = (props: ILocationSection) => {
  const { name, url } = props;

  const { data, isLoading: isLocationLoading } = useLocationId(
    url.replace("https://rickandmortyapi.com/api/location/", "")
  );

  const [currentPage, setCurrenPage] = React.useReducer(handlePaginate, {
    start: 0,
    end: 4,
  });

  // const { data: dataResidents, fetchNextPage } = useResidents(
  //   data.location.residents.slice(currentPage.start, currentPage.end)
  // );

  console.log(
    "Array:",
    data.location?.residents?.slice(currentPage.start, currentPage.end)
  );

  console.log("dadas", currentPage);
  return (
    <>
      <button onClick={() => setCurrenPage(data.location.residents)}>
        next
      </button>

      {!isLocationLoading && (
        <>
          <ContentCard label="Name" value={name} />
          <ContentCard label="Type" value={data?.location?.type} />
          <ContentCard label="Dimension" value={data?.location?.dimension} />
          <ContentCard
            label="Residents"
            value={data?.location?.residents?.length.toString()}
          />
        </>
      )}
    </>
  );
};
