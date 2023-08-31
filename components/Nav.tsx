import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [IsScrolled, setIsScrolled] = useState(false);

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
        <TitleWrap>
          <Title isScrolled={IsScrolled}>회사 소개</Title>
          <Title isScrolled={IsScrolled}>서비스 소개</Title>
          <Title isScrolled={IsScrolled}>업무 프로세스</Title>
          <Title isScrolled={IsScrolled}>협력사</Title>
        </TitleWrap>
        <Button isScrolled={IsScrolled}>MSO법인 문의하기</Button>
      </Wrap2>
    </Wrap>
  );
};

interface Props {
  isScrolled?: boolean;
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
`;

const Wrap2 = styled.div`
  width: 1420px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  margin-bottom: 5px;
  cursor: pointer;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div<Props>`
  color: ${props => (props.isScrolled ? '#353535' : 'white')};
  font-size: 18px;
  font-weight: ${props => (props.isScrolled ? '500' : '400')};
  margin: 0 35px;
  cursor: pointer;
`;

const Button = styled.div<Props>`
  border-radius: 10px;
  background-color: ${props => (props.isScrolled ? '#1C459B' : 'white')};
  color: ${props => (props.isScrolled ? 'white' : '#1C459B')};
  font-size: 18px;
  font-weight: ${props => (props.isScrolled ? '400' : '700')};
  padding: 13px 28px;
  cursor: pointer;
`;

export default Nav;
