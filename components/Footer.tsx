import styled from '@emotion/styled';
const Footer = () => {
  return (
    <Wrap>
      <TitleWrap>
        <TitleBox>
          <Title>회사 소개</Title>
          <Title>서비스 소개</Title>
          <Title>업무 프로세스</Title>
          <Title isMarginRightNone>협력사</Title>
        </TitleBox>
      </TitleWrap>
      <ContentWrap>
        <Logo src='/image/footer-logo.png' />
        <TextWrap>
          <TextBox>
            <Text>
              <span>ADDRESS</span>서울 서초구 동작대로 214 6층
            </Text>
            <Text>|</Text>
            <Text>
              <span>TEL</span>02-6951-3323
            </Text>
            <Text>|</Text>
            <Text>
              <span>FAX</span>02-6951-7002
            </Text>
          </TextBox>
          <Text>
            <span>E-MAIL</span>ibspartners.seoul@gmail.com
          </Text>
          <Copyright>
            Copyright IBS & AH Corparation All rights reserved.
          </Copyright>
        </TextWrap>
        <NumberWrap>
          <NumberText>MSO법인 전화상담</NumberText>
          <Number>02-6951-332</Number>
        </NumberWrap>
      </ContentWrap>
    </Wrap>
  );
};

interface Props {
  isMarginRightNone?: boolean;
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
`;

const Title = styled.div<Props>`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

const ContentWrap = styled.div`
  width: 1420px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 18% 40% 20%;
  justify-content: space-between;
`;

const Logo = styled.img`
  margin-bottom: 13px;
`;

const TextWrap = styled.div``;

const TextBox = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: #d4d4d4;
  font-size: 15px;
  font-weight: 300;

  span {
    margin-right: 12px;
    font-weight: 500;
  }
`;

const Copyright = styled.div`
  margin-top: 22px;
  color: #525252;
  font-size: 15px;
  font-weight: 300;
`;

const NumberWrap = styled.div`
  margin-left: auto;
`;

const NumberText = styled.div`
  color: #e0e0e0;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 5px;
`;

const Number = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
`;

export default Footer;
