import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [IsScrolled, setIsScrolled] = useState(false);
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const updateScroll = () => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    if (ScrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <Wrap isScrolled={IsScrolled}>
      <Wrap2>
        {IsScrolled ? (
          <Logo src='/image/nav-logo-b.png' />
        ) : (
          <Logo src='/image/nav-logo.png' />
        )}
        <Logo2 src='/image/nav-logo.png' />
        <TitleWrap isMenuOpen={IsMenuOpen}>
          <Title isMenuOpen={IsMenuOpen} isScrolled={IsScrolled}>
            회사 소개
          </Title>
          <Title isMenuOpen={IsMenuOpen} isScrolled={IsScrolled}>
            서비스 소개
          </Title>
          <Title isMenuOpen={IsMenuOpen} isScrolled={IsScrolled}>
            업무 프로세스
          </Title>
          <Title isMenuOpen={IsMenuOpen} isScrolled={IsScrolled}>
            협력사
          </Title>
          <Button2>MSO법인 문의하기</Button2>
        </TitleWrap>
        <Button isScrolled={IsScrolled}>MSO법인 문의하기</Button>
        {IsMenuOpen ? (
          <MobileLogo
            src='/image/x-mark.png'
            onClick={() => setIsMenuOpen(!IsMenuOpen)}
          />
        ) : (
          <MobileLogo
            src='/image/menu.png'
            onClick={() => setIsMenuOpen(!IsMenuOpen)}
          />
        )}
      </Wrap2>
    </Wrap>
  );
};

interface Props {
  isScrolled?: boolean;
  isMenuOpen?: boolean;
}

const Wrap = styled.div<Props>`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  border-bottom: ${props =>
    props.isScrolled ? '1px solid #dbdbdb' : '1px solid white'};
  background-color: ${props => (props.isScrolled ? 'white' : '')};
  transition: 0.2s;
  z-index: 100;

  @media screen and (max-width: 1024px) {
    background-color: #1c459b;
  }

  @media screen and (max-width: 760px) {
    border-bottom: 1px solid #dbdbdb;
    height: 60px;
  }
`;

const Wrap2 = styled.div`
  width: 1420px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 700px;
    margin: 0 auto;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    height: 60px;
  }
`;

const Logo = styled.img`
  margin-bottom: 5px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Logo2 = styled.img`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 760px) {
    width: 177px;
  }
`;

const MobileLogo = styled.img`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 760px) {
    width: 20px;
  }
`;

const TitleWrap = styled.div<Props>`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    overflow: hidden;
    height: ${props => (props.isMenuOpen ? 'auto' : '0')};
    position: absolute;
    top: 71px;
    background-color: #1c459b;
    display: block;
    width: 100%;
    left: 0;
    padding: ${props => (props.isMenuOpen ? '20px 0' : '0')};
    transition: 0.2s;
  }

  @media screen and (max-width: 760px) {
    padding: ${props => (props.isMenuOpen ? '10px 0' : '0')};
    top: 61px;
  }
`;

const Title = styled.div<Props>`
  color: ${props => (props.isScrolled ? '#353535' : 'white')};
  font-size: 18px;
  font-weight: ${props => (props.isScrolled ? '500' : '400')};
  margin: 0 35px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
    color: white;
    margin: 28px 65px;
    font-size: 22px;
  }

  @media screen and (max-width: 760px) {
    font-size: 17px;
    margin: 22px 25px;
  }
`;

const Button = styled.div<Props>`
  border-radius: 10px;
  background-color: ${props => (props.isScrolled ? '#1C459B' : 'white')};
  color: ${props => (props.isScrolled ? 'white' : '#1C459B')};
  font-size: 18px;
  font-weight: ${props => (props.isScrolled ? '400' : '700')};
  padding: 13px 28px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Button2 = styled.div<Props>`
  display: none;
  border-radius: 10px;
  background-color: ${props => (props.isScrolled ? '#1C459B' : 'white')};
  color: ${props => (props.isScrolled ? 'white' : '#1C459B')};
  font-size: 18px;
  font-weight: ${props => (props.isScrolled ? '400' : '700')};
  padding: 13px 28px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: flex;
    padding: 17px 35px;
    margin: 25px 63px;
    font-size: 20px;
    justify-content: center;
  }

  @media screen and (max-width: 760px) {
    margin: 20px 25px;
    padding: 15px 35px;
    font-size: 16px;
  }
`;

export default Nav;
