import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Main: NextPage = () => {
  return (
    <Layout>
      <MainImgWrap>
        <MainImg src='/image/main-cover.jpg' />
        <MainImgBox>
          <MainImgTitle>MSO법인 설립 컨설팅 전문</MainImgTitle>
          <MainImgText>
            동물 병원 경영지원 회사 설립으로
            <br /> 새로운 미래를 만들어보세요.
          </MainImgText>
          <MainImgButton>MSO법인 문의하기 →</MainImgButton>
        </MainImgBox>
        <ScrollWrap>
          <ScrollText>SCROLL DOWN</ScrollText>
          <ScrollIcon src='/image/scroll-icon.png' />
        </ScrollWrap>
      </MainImgWrap>
      <ContentWrap>
        <Content1Title>
          MSO법인 전문가 <span>IBS & AH Corparation</span>
        </Content1Title>
        <Content1Text1>
          IBS 아웃소싱은 동물병원을 대상으로 MSO법인 설립 및 운영을 도와드리고
          있습니다.
        </Content1Text1>
        <Content1Box>
          <Content1BoxWrap>
            <Content1BoxImg src='/image/content1-img.png' />
            <div>
              <Content1BoxTitle>
                MSO는 <span>병원경영지원회사</span>입니다.
              </Content1BoxTitle>
              <Content1BoxText>
                MSO란 MSO법인 설립 및 컨설팅 전문 기업입니다. MSO법인 설립을
                통해 병원의 의료업무 외의 행정업무를 위탁 받아 병의원 운영의
                효율성을 높이고 매출성장 향상을 도모합니다. MSO법인 설립 및
                컨설팅 전문 기업입니다. MSO법인 설립을 통해 병원의 의료업무 외의
                행정업무를 위탁 받아 병의원 운영의 효율성을 높이고 매출성장
                향상을 도모합니다.
              </Content1BoxText>
            </div>
          </Content1BoxWrap>
        </Content1Box>
        <Content1Text2>
          IBS & AH Corparation은 MSO법인을 통해 <br />
          <span>병원 경영의 전반적인 서비스</span>를 제공해 드리고 있습니다.
        </Content1Text2>
        <Content2Title>서비스 소개</Content2Title>
        <Content2Wrap>
          <Content2Box>
            <Content2BoxTitle>회계</Content2BoxTitle>
            <Content2BoxText>
              위하고 등의 프로그램을 사용하여 기장,
              <br /> 계산서 발행 등의 업무 수행
            </Content2BoxText>
            <Content2BoxImg src='/image/content2-img1.png' />
          </Content2Box>
          <Content2Box>
            <Content2BoxTitle>세무 컨설팅</Content2BoxTitle>
            <Content2BoxText>
              현장 방문을 통한 병원 비용구조 파악 및<br /> 세무관리
            </Content2BoxText>
            <Content2BoxImg src='/image/content2-img2.png' />
          </Content2Box>
          <Content2Box>
            <Content2BoxTitle>인사, 행정</Content2BoxTitle>
            <Content2BoxText>
              근로계약서, 퇴사 등의 번거로운
              <br /> 직원 관리 대리 수행
              <br /> (급여대장, 급여명세서, 4대보험 신고 등)
            </Content2BoxText>
            <Content2BoxImg src='/image/content2-img3.png' />
          </Content2Box>
          <Content2Box>
            <Content2BoxTitle>마케팅</Content2BoxTitle>
            <Content2BoxText>
              SEO 작업, SNS 마케팅, 바이럴 마케팅, 인플루언서 마케팅, Display
              advertising, 제휴 마케팅 등
            </Content2BoxText>
            <Content2BoxImg src='/image/content2-img4.png' />
          </Content2Box>
        </Content2Wrap>
      </ContentWrap>
      <Content3Wrap>
        <Content1BoxWrap>
          <div>
            <Content3Title>MSO법인 업무 프로세스</Content3Title>
            <Content3Text>
              IBS & AH Corparation과 함께 MSO법인의 시작부터 운영까지 한번에
              해결해보세요.
            </Content3Text>
          </div>
          <Content3Box>
            <Content3Line />
            <Content3IconBoxWrap>
              <Content3IconBox>
                <Content3Icon src='/image/content3-img1.png' />
                <Content3IconText>
                  MSO법인설립 희망 동물병원 모집
                </Content3IconText>
              </Content3IconBox>
              <Content3IconBox></Content3IconBox>
              <Content3IconBox></Content3IconBox>
              <Content3IconBox isMarginBottomNone></Content3IconBox>
            </Content3IconBoxWrap>
          </Content3Box>
        </Content1BoxWrap>
      </Content3Wrap>
    </Layout>
  );
};

interface Props {
  isMarginBottomNone?: boolean;
}

const MainImgWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 130px;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100vh;
`;

const MainImgBox = styled.div`
  position: absolute;
  width: 1420px;
`;

const MainImgTitle = styled.h1`
  color: #fff;
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 23px;
`;

const MainImgText = styled.div`
  color: #fff;
  font-size: 37px;
  font-weight: 400;
  line-height: 59px;
  margin-bottom: 70px;
`;

const MainImgButton = styled.div`
  display: flex;
  width: 262px;
  height: 59px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #fff;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
`;

const ScrollWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScrollText = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 7px;
`;

const ScrollIcon = styled.img``;

const ContentWrap = styled.div`
  width: 1420px;
  margin: 0 auto;
`;

const Content1Title = styled.h2`
  color: #1c459b;
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;

  span {
    color: #1c1c1c;
  }
`;

const Content1Text1 = styled.div`
  color: #1c1c1c;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 50px;
`;

const Content1Box = styled.div`
  width: 1420px;
  height: 460px;
  border-radius: 40px;
  background: #f2f6ff;
  padding: 74px 206px;
  box-sizing: border-box;
  margin-bottom: 70px;
`;

const Content1BoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content1BoxImg = styled.img``;

const Content1BoxTitle = styled.h3`
  color: #1c1c1c;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;

  span {
    color: #1c459b;
  }
`;

const Content1BoxText = styled.div`
  color: #282828;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  width: 585px;
`;

const Content1Text2 = styled.h3`
  color: #1c1c1c;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  margin-bottom: 200px;
  span {
    color: #1c459b;
  }
`;

const Content2Title = styled.div`
  color: #1c459b;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Content2Wrap = styled.div`
  width: 1420px;
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  justify-content: space-between;
  margin-bottom: 200px;
`;

const Content2Box = styled.div`
  width: 100%;
  height: 334px;
  border-radius: 20px;
  background: #f2f6ff;
  position: relative;
  padding: 52px 30px;
  box-sizing: border-box;
`;

const Content2BoxTitle = styled.div`
  color: #353535;
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Content2BoxText = styled.div`
  color: #353535;
  font-size: 17px;
  font-weight: 400;
  line-height: 26px;
`;

const Content2BoxImg = styled.img`
  position: absolute;
  left: 91%;
  top: 90%;
  transform: translate(-100%, -100%);
`;

const Content3Wrap = styled.div`
  width: 100%;
  padding: 154px 312px;
  box-sizing: border-box;
  background-color: #1c459b;
`;

const Content3Wrap2 = styled.div`
  display: grid;
  grid-template-columns: 35% 60%;
  justify-content: space-between;
`;
const Content3Title = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 17px;
`;

const Content3Text = styled.div`
  color: #fff;
  font-size: 25px;
  font-weight: 300;
  line-height: 44px;
  width: 508px;
`;

const Content3Box = styled.div`
  display: flex;
  width: 612px;
  position: relative;
  justify-content: space-between;
`;

const Content3Line = styled.div`
  width: 1px;
  height: 445px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

const Content3IconBoxWrap = styled.div`
  margin-left: 75px;
`;

const Content3IconBox = styled.div<Props>`
  padding: 26px 40px;
  border-radius: 12px;
  background: #fff;
  display: flex;
  margin-bottom: ${props => (props.isMarginBottomNone ? '' : '40px')};
  align-items: center;
`;

const Content3Icon = styled.img`
  margin-right: 36px;
`;

const Content3IconText = styled.div`
  color: #353535;
  font-size: 25px;
  font-weight: 500;
  line-height: 40px;
`;

export default Main;
