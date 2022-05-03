import React from "react";

import * as S from "./style";
import { ContentCard, ResidentCard } from "../";

import { useCharacterByID, useLocationId } from "services";

interface ILocationSection {
  name: string;
  url: string;
}

type TCurrentPage = {
  hasMore: boolean;
  index: {
    start: number;
    end: number;
  };
};

const handlePaginate = (state: TCurrentPage, residentsIds) => {
  const qtdPages = residentsIds.length;
  const hasMore = state.index.end < qtdPages;
  return hasMore
    ? {
        hasMore,
        index: {
          start: state.index.start + 4,
          end: state.index.end + 4,
        },
      }
    : { ...state, hasMore };
};

const initialPage: TCurrentPage = {
  hasMore: true,
  index: { start: 0, end: 4 },
};

export const LocationSection = (props: ILocationSection) => {
  const { name, url } = props;

  const { data, isLoading: isLocationLoading } = useLocationId(
    url.replace("https://rickandmortyapi.com/api/location/", "")
  );

  const [page, setPage] = React.useReducer(handlePaginate, initialPage);

  const charactersID = React.useMemo(
    () => data?.location?.residents?.slice(page.index.start, page.index.end),
    [page, data]
  );

  const {
    data: dataResidents,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
  } = useCharacterByID({
    queryKey: "RESIDENTS",
    charactersID,
    locationID: data?.location.id,
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

          <S.ResidentsContainer>
            {dataResidents?.pages?.map(({ residents }) => {
              return residents?.map((resident) => (
                <ResidentCard key={resident.id} {...resident} />
              ));
            })}
            <S.LoadMore
              onClick={() => {
                fetchNextPage();
                setPage(data.location.residents);
              }}
              style={{ display: page.hasMore ? "block" : "none" }}
            >
              {page.hasMore
                ? isFetchingNextPage
                  ? "..."
                  : "Load More"
                : "That's all!"}
            </S.LoadMore>
          </S.ResidentsContainer>
        </>
      )}
    </>
  );
};
