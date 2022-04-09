import { Dispatch, SetStateAction } from "react";

import * as S from "./styles";

import { IResponse } from "types/rick-morty-api";

import { PageElement } from "components/elements";

type IPagination = {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  sibling: number;
} & IResponse["info"];

export const Pagination = (props: IPagination) => {
  const { pages, next, prev, current, sibling, setCurrent } = props;

  const nextIndexs = Array(sibling)
    .fill(null)
    .map((_, index) => {
      const next = current + index + 1;
      const isValid = next <= pages;
      return isValid ? next : false;
    })
    .filter(Boolean) as number[];

  const prevIndexs = Array(sibling)
    .fill(null)
    .map((_, index) => {
      const prev = current - sibling + index;
      const isValid = prev >= 1;
      return isValid ? prev : false;
    })
    .filter(Boolean) as number[];

  const firstOnes = prevIndexs[0] > sibling + 1 ? [1, 2] : [];

  const lastOnes =
    nextIndexs[nextIndexs.length - 1] < pages - sibling
      ? [pages - 2, pages - 1, pages]
      : [];

  return (
    <S.Wrapper>
      {!!firstOnes.length && (
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

      {!!lastOnes.length && (
        <>
          <PageElement isValid={false}>...</PageElement>
          {lastOnes.map((label) => (
            <PageElement key={label} setCurrent={setCurrent}>
              {label}
            </PageElement>
          ))}
        </>
      )}
    </S.Wrapper>
  );
};
