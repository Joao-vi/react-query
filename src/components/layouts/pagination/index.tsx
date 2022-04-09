import { Dispatch, SetStateAction, useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useMedia from "use-media";

import * as S from "./styles";

import { IResponse } from "types/rick-morty-api";

import { PageElement } from "components/elements";

type IPagination = {
  isLoading: boolean;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  sibling: number;
} & Omit<IResponse["info"], "next" | "prev">;

const mockedArray = [...Array.from(Array(10).keys())];

export const Pagination = (props: IPagination) => {
  const { pages, current, sibling, setCurrent, isLoading } = props;

  const isSmallScreen = useMedia("(min-width:600px");

  const nextIndexs = useMemo(
    () =>
      Array(sibling)
        .fill(null)
        .map((_, index) => {
          const next = current + index + 1;
          const isValid = next <= pages;
          return isValid ? next : false;
        })
        .filter(Boolean) as number[],
    [sibling, current, pages]
  );

  const prevIndexs = useMemo(
    () =>
      Array(sibling)
        .fill(null)
        .map((_, index) => {
          const prev = current - sibling + index;
          const isValid = prev >= 1;
          return isValid ? prev : false;
        })
        .filter(Boolean) as number[],
    [sibling, current]
  );

  const firstOnes = prevIndexs[0] > sibling + 1 ? [1, 2] : [];

  const lastOnes =
    nextIndexs[nextIndexs.length - 1] < pages - sibling
      ? [pages - 2, pages - 1, pages]
      : [];

  return (
    <S.Wrapper>
      <S.Arrow
        isLoading={isLoading}
        disabled={current === 1}
        onClick={() => setCurrent((state) => state - 1)}
      >
        <IoIosArrowBack />
      </S.Arrow>

      <S.Content isLoading={isLoading}>
        {!!firstOnes.length && isSmallScreen && (
          <>
            {firstOnes.map((label) => (
              <PageElement key={label} setCurrent={setCurrent}>
                {label}
              </PageElement>
            ))}
            <PageElement isValid={false} setCurrent={setCurrent}>
              ...
            </PageElement>
          </>
        )}

        {prevIndexs.map((label) => (
          <PageElement key={label} setCurrent={setCurrent}>
            {label}
          </PageElement>
        ))}

        <PageElement className="current" isValid={false}>
          {current}
        </PageElement>

        {nextIndexs.map((label) => (
          <PageElement key={label} setCurrent={setCurrent}>
            {label}
          </PageElement>
        ))}

        {!!lastOnes.length && isSmallScreen && (
          <>
            <PageElement isValid={false}>...</PageElement>
            {lastOnes.map((label) => (
              <PageElement key={label} setCurrent={setCurrent}>
                {label}
              </PageElement>
            ))}
          </>
        )}
      </S.Content>

      <S.Arrow
        isLoading={isLoading}
        disabled={current === pages}
        onClick={() => setCurrent((state) => state + 1)}
      >
        <IoIosArrowForward />
      </S.Arrow>
    </S.Wrapper>
  );
};
