import React from "react";

import * as S from "./style";
import { ContentCard, ResidentCard } from "../";

import { useResidents, useLocationId } from "services";

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

  const [page, setPage] = React.useReducer(handlePaginate, {
    start: 0,
    end: 4,
  });

  const residentsId = React.useMemo(
    () => data?.location?.residents?.slice(page.start, page.end),
    [page, data]
  );

  const {
    data: dataResidents,
    isLoading,
    fetchNextPage,
  } = useResidents({
    residentsId,
    locationId: data?.location.id,
  });

  return (
    <>
      {!isLocationLoading && (
        <>
          <ContentCard label="Name" value={name} />
          <ContentCard label="Type" value={data?.location?.type} />
          <ContentCard label="Dimension" value={data?.location?.dimension} />
          <ContentCard
            label="Total Residents"
            value={data?.location?.residents?.length.toString()}
          />
        </>
      )}
      {!isLoading && (
        <>
          <S.SubSection>Residents</S.SubSection>
          {dataResidents?.pages?.map(({ residents }) =>
            residents.map((resident) => (
              <ResidentCard key={resident.id} {...resident} />
            ))
          )}
        </>
      )}
    </>
  );
};
