import styled from '@emotion/styled';
import React, { RefObject } from 'react';

interface NavProps {
  sectionRefs: RefObject<HTMLElement>[];
}

const Footer = ({ sectionRefs }: NavProps) => {
  //스크롤 위치 변경
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Wrap>
      <TitleWrap>
        <TitleBox>
          <Title onClick={() => scrollToSection(sectionRefs[0])}>
            회사 소개
          </Title>
          <Title onClick={() => scrollToSection(sectionRefs[1])}>
            서비스 소개
          </Title>
          <Title onClick={() => scrollToSection(sectionRefs[2])}>
            업무 프로세스
          </Title>
          <Title
            isMarginRightNone
            onClick={() => scrollToSection(sectionRefs[3])}
          >
            협력사
          </Title>
        </TitleBox>
      </TitleWrap>
      <ContentWrap>
        <Logo src='/image/footer-logo.png' />
        <TextWrap>
          <IpadLogo src='/image/footer-logo.png' />
          <TextBox grid>
            <Text>
              <TextBold isMarginLeftNone isIpadMarginLeftNone>
                ADDRESS
              </TextBold>
              서울 서초구 동작대로 214 6층
              <TextBold> TEL</TextBold>02-6951-3323
              <TextBold> FAX</TextBold>02-6951-7002
              <TextBold isMarginLeftNone> E-MAIL</TextBold>
              ibspartners.seoul@gmail.com
            </Text>
          </TextBox>

          <Copyright>
            Copyright IBS & AH Corparation All rights reserved.
          </Copyright>
        </TextWrap>
        <NumberWrap>
          <NumberText>MSO법인 전화상담</NumberText>
          <Number>02-6951-3323</Number>
        </NumberWrap>
      </ContentWrap>
    </Wrap>
  );
};

interface Props {
  isMarginRightNone?: boolean;
  isMarginLeftNone?: boolean;
  isIpadMarginLeftNone?: boolean;
  grid?: boolean;
}

const Wrap = styled.div`
  width: 100%;
  background-color: #292929;
`;

const TitleWrap = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #747474;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 600px;

  @media screen and (max-width: 760px) {
    width: 350px;
  }
`;

const Title = styled.div<Props>`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
`;

const ContentWrap = styled.div`
  width: 1420px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 18% 40% 20%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 700px;
    grid-template-columns: 60% 30%;
    margin: 85px auto;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    grid-template-columns: 100%;
  }
`;

const Logo = styled.img`
  margin-bottom: 13px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const IpadLogo = styled.img`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    position: absolute;
    top: -52px;
  }

  @media screen and (max-width: 760px) {
    width: 177px;
    top: -40px;
  }
`;

const TextWrap = styled.div`
  position: relative;
`;

const TextBox = styled.div<Props>`
  width: 600px;
  display: flex;
  line-height: 26px;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 508px;
  }

  @media screen and (max-width: 760px) {
    width: 320px;
    margin-top: 20px;
  }
`;

const Text = styled.div`
  color: #d4d4d4;
  font-size: 15px;
  font-weight: 300;
  position: relative;

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
`;

const TextBold = styled.span<Props>`
  margin-left: ${props => (props.isMarginLeftNone ? '' : '20px')};
  margin-right: 12px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    margin-left: ${props => (props.isIpadMarginLeftNone ? '' : '20px')};
  }
`;

const Line = styled.div`
  height: 15px;
  width: 0.1px;
  background-color: #d4d4d4;
  position: absolute;
  left: -12px;
  top: 6px;
  opacity: 0.4;
`;

const Copyright = styled.div`
  margin-top: 22px;
  color: #636363;
  font-size: 14px;
  font-weight: 300;

  @media screen and (max-width: 760px) {
    font-size: 13px;
  }
`;

const NumberWrap = styled.div`
  margin-left: auto;

  @media screen and (max-width: 760px) {
    margin-right: auto;
    margin-left: 0;
    position: relative;
    top: 35px;
  }
`;

const NumberText = styled.div`
  color: #e0e0e0;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 5px;

  @media screen and (max-width: 760px) {
    font-size: 15px;
  }
`;

const Number = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 700;

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
`;

export default Footer;
