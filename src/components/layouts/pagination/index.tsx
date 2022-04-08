import { PageElement } from "components/elements";
import { Dispatch, SetStateAction } from "react";
import { IResponse } from "types/rick-morty-api";
import * as S from "./styles";

type IPagination = {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  spread: number;
} & IResponse["info"];

export const Pagination = (props: IPagination) => {
  const { pages, next, prev, current, spread, setCurrent } = props;

  const nextIndexs = Array(spread)
    .fill(null)
    .map((_, index) => {
      const next = current + index + 1;
      const isValid = next <= pages;
      return isValid ? next : false;
    })
    .filter(Boolean) as number[];

  const prevIndexs = Array(spread)
    .fill(null)
    .map((_, index) => {
      const prev = current - spread + index;
      const isValid = prev >= 1;
      return isValid ? prev : false;
    })
    .filter(Boolean) as number[];

  const firstOnes = prevIndexs[0] > spread + 3 ? [1, 2, 3] : [];

  const lastOnes =
    nextIndexs[nextIndexs.length - 1] < pages - spread + 2
      ? [pages - 3, pages - 2, pages - 1, pages]
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

      <PageElement className="current">{current}</PageElement>

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
