import * as S from "./styles";

import { BsGithub, BsLinkedin } from "react-icons/bs";
export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Text>
        Made by <span className="name">João</span>
      </S.Text>
      <S.SocialMedias>
        <S.SocialElement href="https://github.com/Joao-vi" target="_blank">
          <BsGithub />
        </S.SocialElement>
        <S.SocialElement
          href="https://www.linkedin.com/in/joao-vi/"
          target="_blank"
        >
          <BsLinkedin />
        </S.SocialElement>
      </S.SocialMedias>
    </S.Wrapper>
  );
};
