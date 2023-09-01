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
                MSO(Management Service Organization)란 병원경영지원회사로
                병·의원들의 지분투자로 설립되는 주식회사형태로서 의료행위와
                관계없는 병원경영 전반(구매, 인력관리, 진료비 청구, 마케팅, 홍보
                등)에 대한 서비스를 제공하는 회사를 지칭합니다. MSO법인 설립 및
                운영으로 각 병·의원 원장님들께서 겪고 계신 다양한 문제들을
                해결하고, 병·의원 운영의 효율성을 높여 매출성장 향상 및 새로운
                미래를 설계하실 수 있습니다.
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
            <Content3Line>
              <Content3Round top='-1%' />
              <Content3Round top='29.5%' />
              <Content3Round top='64%' />
              <Content3Round top='97%' />
            </Content3Line>
            <Content3IconBoxWrap>
              <Content3IconBox>
                <Content3Icon src='/image/content3-img1.png' />
                <Content3IconText>
                  MSO법인 설립 희망 동물병원 모집
                </Content3IconText>
              </Content3IconBox>
              <Content3IconBox>
                <Content3Icon src='/image/content3-img2.png' />
                <Content3IconText>MSO법인 설립 희망</Content3IconText>
              </Content3IconBox>
              <Content3IconBox>
                <Content3Icon src='/image/content3-img3.png' />
                <Content3IconText>
                  전산자료를 분석하여
                  <br /> 매출 원가 손익계산서 분석
                </Content3IconText>
              </Content3IconBox>
              <Content3IconBox isMarginBottomNone>
                <Content3Icon src='/image/content3-img4.png' />
                <Content3IconText>전산자료 기반으로 MSO 운영</Content3IconText>
              </Content3IconBox>
            </Content3IconBoxWrap>
          </Content3Box>
        </Content1BoxWrap>
      </Content3Wrap>
      <ContentWrap>
        <Content4Title>
          다방면에서의 <span>전문 세무조사 대응</span>
        </Content4Title>
        <Content4Text>
          다양한 분야의 전문 협력사들과 함께 세무조사에 빈틈없이 대응합니다.
        </Content4Text>
        <Content4BoxWrap>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img1.png' />
            <Content4BoxText>
              국세청 세무조사를 대비한
              <br /> 합리적 관리와 신고납부 전략
            </Content4BoxText>
          </Content4Box>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img2.png' />
            <Content4BoxText>
              보험(면세), 비보험(과세),
              <br /> 현금수입과 신용카드 정산 문제
            </Content4BoxText>
          </Content4Box>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img3.png' />
            <Content4BoxText>세무사 사무실과의 소통 문제</Content4BoxText>
          </Content4Box>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img4.png' />
            <Content4BoxText>노무사 사무실과 업무공조</Content4BoxText>
          </Content4Box>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img5.png' />
            <Content4BoxText>개원 자금과 차입금</Content4BoxText>
          </Content4Box>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img6.png' />
            <Content4BoxText>
              공동 개원의 출자 차입금과
              <br /> 운영 차입금
            </Content4BoxText>
          </Content4Box>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img7.png' />
            <Content4BoxText>개원 자금과 자금출처조사</Content4BoxText>
          </Content4Box>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img8.png' />
            <Content4BoxText>
              사업용 부동산 취득 시<br /> 등기명의 선택
            </Content4BoxText>
          </Content4Box>
          <Content4Box>
            <Content4BoxImg src='/image/content4-img9.png' />
            <Content4BoxText>병원의 현금 관리</Content4BoxText>
          </Content4Box>
        </Content4BoxWrap>

        <Content4Title>
          다양한 <span>전문 협력사</span>들과의 협업
        </Content4Title>
        <Content4Text>
          노무법인, 세무법인, 법무법인, 변호사 법률사무소, 변리사무소와의 협업을
          통해
          <br /> MSO법인의 효율적인 운영을 지원하고 있습니다.
        </Content4Text>
        <Content5Wrap>
          <Content5Round1 />
          <Content5Round2 />
          <Content5Logo src='/image/content5-logo.png' />

          <Content5Box left='13%'>
            <Content5Partners
              height='60px'
              src='/image/content5-partner1.png'
            />
          </Content5Box>

          <Content5Box left='55%'>
            <Content5Partners
              height='45px'
              src='/image/content5-partner2.png'
            />
          </Content5Box>

          <Content5Box top='40%' left='3%'>
            <Content5Partners
              height='55px'
              src='/image/content5-partner3.png'
            />
          </Content5Box>

          <Content5Box top='40%' left='66%'>
            <Content5Partners
              height='68px'
              src='/image/content5-partner4.png'
            />
          </Content5Box>

          <Content5Box top='81.7%' left='13%'>
            <Content5Partners
              height='50px'
              src='/image/content5-partner5.png'
            />
          </Content5Box>

          <Content5Box top='81.7%' left='55%'>
            <Content5Partners
              height='55px'
              src='/image/content5-partner6.png'
            />
          </Content5Box>
        </Content5Wrap>
      </ContentWrap>

      <Content6Wrap>
        <Content6Title>MSO법인 문의하기</Content6Title>
        <Content6BoxWrap>
          <Content6Box1>
            <Content6MiniBoxWrap>
              <Content6InputNameWrap>
                <Content6Input1 />
                <Content6InputName>병원명</Content6InputName>
              </Content6InputNameWrap>
              <Content6InputNameWrap>
                <Content6Input1 />
                <Content6InputName>이메일</Content6InputName>
              </Content6InputNameWrap>
            </Content6MiniBoxWrap>
            <Content6MiniBoxWrap>
              <Content6InputNameWrap>
                <Content6Input1 />
                <Content6InputName>성함</Content6InputName>
              </Content6InputNameWrap>
              <Content6InputNameWrap>
                <Content6Input1 />
                <Content6InputName>연락처</Content6InputName>
              </Content6InputNameWrap>
            </Content6MiniBoxWrap>
            <Content6InputNameWrap>
              <Content6Input2 />
              <Content6InputName>문의 내용</Content6InputName>
            </Content6InputNameWrap>
          </Content6Box1>
          <Content6TextWrap>
            <Content6Text1>개인정보 수집 및 이용 동의</Content6Text1>
            <Content6Text2>
              IBS & AH Corporation은 귀하의 개인정보를 중요시하며,
              <br />
              개인정보보호에 관한 법률을 준수하고 있습니다.
            </Content6Text2>
            <Content6Text2>
              개인정보 수집 항목: 이름, 연락처, 이메일
              <br />
              개인정보 수집 및 이용 목적: 문의에 대한 확인
              <br />및 회신 개인정보 보유 및 이용 기간: 수집 및 이용 목적 달성
              시까지 보유하며
              <br />
              해당 목적이 달성되면 파기됩니다.
            </Content6Text2>
            <Content6Agree>
              <CheckBox type='checkbox' />
              <CheckBoxText>
                [필수] 개인정보 수집 및 이용에 동의합니다.
              </CheckBoxText>
            </Content6Agree>
          </Content6TextWrap>
        </Content6BoxWrap>
        <Content6Button>MSO법인 문의하기</Content6Button>
      </Content6Wrap>
    </Layout>
  );
};

interface Props {
  isMarginBottomNone?: boolean;
  top?: string;
  left?: string;
  height?: string;
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
  color: #5b5b5b;
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
  color: #5b5b5b;
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
  color: #5b5b5b;
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
  margin-bottom: 200px;
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
  justify-content: space-between;
  align-items: center;
`;

const Content3Line = styled.div`
  width: 1px;
  height: 465px;
  background-color: #fff;
  position: relative;
`;

const Content3Round = styled.div<Props>`
  width: 12px;
  height: 12px;
  border: 3px solid #fff;
  border-radius: 12px;
  position: absolute;
  top: ${props => props.top};
  background-color: #1c459b;
  left: -8px;
`;

const Content3IconBoxWrap = styled.div`
  margin-left: 75px;
`;

const Content3IconBox = styled.div<Props>`
  padding: 29px 45px;
  border-radius: 12px;
  background: #fff;
  display: flex;
  margin-bottom: ${props => (props.isMarginBottomNone ? '' : '40px')};
  align-items: center;
`;

const Content3Icon = styled.img`
  margin-right: 25px;
`;

const Content3IconText = styled.div`
  color: #353535;
  font-size: 24px;
  font-weight: 500;
  line-height: 37px;
`;

const Content4Title = styled.div`
  color: #1c1c1c;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 18px;
  text-align: center;

  span {
    color: #1c459b;
  }
`;

const Content4Text = styled.div`
  color: #5b5b5b;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-bottom: 70px;
`;

const Content4BoxWrap = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  grid-gap: 27px;
  margin-bottom: 200px;
`;

const Content4Box = styled.div`
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* border: 1px solid #ebebeb; */
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 256px;
`;

const Content4BoxImg = styled.img`
  margin-bottom: 24px;
`;

const Content4BoxText = styled.div`
  color: #353535;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 33px;
`;

const Content5Wrap = styled.div`
  width: 1300px;
  height: 630px;
  margin: 30px auto 200px auto;
  position: relative;
`;

const Content5Round1 = styled.div`
  width: 575px;
  height: 575px;
  border-radius: 500px;
  background-color: #f2f6ff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content5Round2 = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 200px;
  background-color: #1c459b;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content5Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content5Box = styled.div<Props>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 400px;
  height: 115px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content5Partners = styled.img<Props>`
  opacity: 0.6;
  height: ${props => props.height};
`;

const Content6Wrap = styled.div`
  width: 100%;
  padding: 100px 419px;
  background: #1c459b;
  box-sizing: border-box;
`;

const Content6Title = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;
`;

const Content6BoxWrap = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
`;

const Content6Box1 = styled.div`
  width: 100%;
  display: block;
`;

const Content6MiniBoxWrap = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  margin-bottom: 45px;
  justify-content: space-between;
`;

const Content6InputNameWrap = styled.div`
  position: relative;
`;

const Content6Input1 = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(238, 243, 255, 0.15);
  padding: 15px;
  box-sizing: border-box;
  color: white;
  font-size: 18px;

  :focus {
    outline: none;
  }
`;

const Content6Input2 = styled.textarea`
  width: 100%;
  height: 135px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(238, 243, 255, 0.15);
  padding: 15px;
  box-sizing: border-box;
  color: white;
  font-size: 18px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 300;

  :focus {
    outline: none;
  }
`;

const Content6InputName = styled.div`
  position: absolute;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  top: -32px;
  left: 2px;
`;

const Content6TextWrap = styled.div`
  width: 100%;
  height: 324px;
  padding: 30px 20px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(238, 243, 255, 0.15);
  border-radius: 10px;
  position: relative;
`;

const Content6Text1 = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 25px;
`;

const Content6Text2 = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  line-height: 26px;
  margin-bottom: 25px;
`;

const Content6Agree = styled.div`
  position: absolute;
  display: flex;
  top: 104%;
  left: 2px;
`;

const CheckBox = styled.input`
  height: 20px;
  width: 20px;
  color: #787878;
  cursor: pointer;
  margin-right: 2px;
  margin-top: 2px;
  border-radius: 2px;

  @media screen and (max-width: 760px) {
    width: 15px;
  }
`;

const CheckBoxText = styled.div`
  color: #fff;
  margin-left: 7px;
  font-size: 15px;
  font-weight: 300;

  @media screen and (max-width: 760px) {
    font-size: 15px;
  }
`;

const Content6Button = styled.div`
  width: 100%;
  border-radius: 10px;
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 75px;
  font-size: 20px;
  color: #1c459b;
  font-weight: 700;
`;

export default Main;
