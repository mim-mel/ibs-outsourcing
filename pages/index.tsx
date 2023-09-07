import type { NextPage } from 'next';
import React, { useRef, useState, RefObject } from 'react';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Main: NextPage = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const [IsChecked, setIsChecked] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const CheckHandler = (checked: boolean) => {
    if (checked === true) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('click');

    if (IsChecked === true) {
      if (form.current instanceof HTMLFormElement) {
        try {
          const response = await emailjs.sendForm(
            'service_yc66gkg',
            'template_o69isay',
            form.current,
            '5es6fV83b9NIfvWh5'
          );
          alert('메일이 전송되었습니다.');
          console.log(response);
        } catch (error) {
          alert('메일 전송에 실패하였습니다. 다시 시도해주세요.');
          console.error(error);
        }
      } else {
        alert('폼 요소를 참조할 수 없습니다.');
      }
    } else {
      alert('개인정보 제공에 동의해주세요.');
    }
  };

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
      <Nav
        sectionRefs={[
          section1Ref,
          section2Ref,
          section3Ref,
          section4Ref,
          section5Ref,
        ]}
      />
      <MainImgWrap>
        <MainImg src='/image/main-cover.jpg' />
        <MainImgBox>
          <MainImgTitle>MSO법인 설립 컨설팅 전문</MainImgTitle>
          <MainImgText>
            동물 병원 경영지원 회사 설립으로
            <br /> 새로운 미래를 만들어보세요.
          </MainImgText>
          <MainImgButton onClick={() => scrollToSection(section5Ref)}>
            MSO법인 문의하기 →
          </MainImgButton>
        </MainImgBox>
        <ScrollWrap>
          <ScrollText>SCROLL DOWN</ScrollText>
          <ScrollIcon src='/image/scroll-icon.png' />
        </ScrollWrap>
      </MainImgWrap>
      <div ref={section1Ref} />
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
        <div ref={section2Ref} />
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
            <Content2BoxImg isShorter src='/image/content2-img1.png' />
          </Content2Box>
          <Content2Box>
            <Content2BoxTitle>세무 컨설팅</Content2BoxTitle>
            <Content2BoxText>
              현장 방문을 통한 병원 비용구조 파악 및<br /> 세무관리
            </Content2BoxText>
            <Content2BoxImg isShorter src='/image/content2-img2.png' />
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
      <div ref={section3Ref} />
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
        <div ref={section4Ref} />
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
              ipadHeight='38px'
              mobileHeight='19px'
              src='/image/content5-partner1.png'
            />
          </Content5Box>

          <Content5Box left='55%'>
            <Content5Partners
              height='45px'
              ipadHeight='27px'
              mobileHeight='15px'
              src='/image/content5-partner2.png'
            />
          </Content5Box>

          <Content5Box top='40%' left='3%'>
            <Content5Partners
              height='55px'
              ipadHeight='35px'
              mobileHeight='18px'
              src='/image/content5-partner3.png'
            />
          </Content5Box>

          <Content5Box top='40%' left='66%'>
            <Content5Partners
              height='68px'
              ipadHeight='40px'
              mobileHeight='19px'
              src='/image/content5-partner4.png'
            />
          </Content5Box>

          <Content5Box top='81.7%' left='13%'>
            <Content5Partners
              height='50px'
              ipadHeight='30px'
              mobileHeight='16px'
              src='/image/content5-partner5.png'
            />
          </Content5Box>

          <Content5Box top='81.7%' left='55%'>
            <Content5Partners
              height='55px'
              ipadHeight='34px'
              mobileHeight='17px'
              src='/image/content5-partner6.png'
            />
          </Content5Box>
        </Content5Wrap>
      </ContentWrap>
      <div ref={section5Ref} />
      <Content6Wrap>
        <Content6Title>MSO법인 문의하기</Content6Title>
        <Content6BoxForm ref={form} onSubmit={onSubmit}>
          <Content6Box1>
            <Content6MiniBoxWrap>
              <Content6InputNameWrap>
                <Content6Input1
                  type='hospital'
                  name='hospital'
                  placeholder='병원명을 입력해주세요'
                />
                <Content6InputName>병원명</Content6InputName>
              </Content6InputNameWrap>
              <Content6InputNameWrap>
                <Content6Input1
                  type='email'
                  name='email'
                  placeholder='이메일을 입력해주세요'
                />
                <Content6InputName>이메일</Content6InputName>
              </Content6InputNameWrap>
            </Content6MiniBoxWrap>
            <Content6MiniBoxWrap>
              <Content6InputNameWrap>
                <Content6Input1
                  type='name'
                  name='name'
                  placeholder='성함을 입력해주세요'
                />
                <Content6InputName>성함</Content6InputName>
              </Content6InputNameWrap>
              <Content6InputNameWrap>
                <Content6Input1
                  type='tel'
                  name='tel'
                  placeholder='연락처를 입력해주세요'
                />
                <Content6InputName>연락처</Content6InputName>
              </Content6InputNameWrap>
            </Content6MiniBoxWrap>
            {/* <Content6InputNameWrap isMarginBottom>
              <Select name='selected'>
                <option value='americano'>아메리카노</option>
                <option value='caffe latte'>카페라테</option>
                <option value='cafe au lait'>카페오레</option>
                <option value='espresso'>에스프레소</option>
              </Select>
              <Content6InputName>문의 항목</Content6InputName>
            </Content6InputNameWrap> */}
            <Content6InputNameWrap>
              <Content6Input2
                name='content'
                placeholder='문의 내용을 입력해주세요'
              />
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
              <CheckBox
                type='checkbox'
                checked={IsChecked}
                onChange={e => CheckHandler(e.target.checked)}
              />
              <CheckBoxText>
                [필수] 개인정보 수집 및 이용에 동의합니다.
              </CheckBoxText>
            </Content6Agree>
          </Content6TextWrap>
          <Content6Button>문의하기</Content6Button>
        </Content6BoxForm>
      </Content6Wrap>
      <Footer
        sectionRefs={[
          section1Ref,
          section2Ref,
          section3Ref,
          section4Ref,
          section5Ref,
        ]}
      />
    </Wrap>
  );
};

interface Props {
  isMarginBottomNone?: boolean;
  isMarginBottom?: boolean;
  isShorter?: boolean;
  top?: string;
  left?: string;
  height?: string;
  ipadHeight?: string;
  mobileHeight?: string;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImgWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 130px;

  @media screen and (max-width: 1024px) {
    height: 590px;
    overflow: hidden;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 40px;
  }
`;

const MainImg = styled.img`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    height: auto;
  }

  @media screen and (max-width: 760px) {
    height: 590px;
    width: auto;
    position: relative;
    left: 200px;
  }
`;

const MainImgBox = styled.div`
  position: absolute;
  width: 1420px;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
  }
`;

const MainImgTitle = styled.h1`
  color: #fff;
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 23px;

  @media screen and (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 760px) {
    font-size: 28px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const MainImgText = styled.div`
  color: #fff;
  font-size: 37px;
  font-weight: 400;
  line-height: 59px;
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 38px;
    font-weight: 300;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 760px) {
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 30px;
  }
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
  cursor: pointer;

  @media screen and (max-width: 760px) {
    width: 200px;
    height: 45px;
    margin: 0 auto;
    font-size: 16px;
  }
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

  @media screen and (max-width: 1024px) {
    top: 80%;
  }

  @media screen and (max-width: 760px) {
    top: 92%;
  }
`;

const ScrollText = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 7px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    margin-bottom: 0px;
  }
`;

const ScrollIcon = styled.img`
  @media screen and (max-width: 1024px) {
    width: 20px;
  }
`;

const ContentWrap = styled.div`
  width: 1420px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
  }
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

  @media screen and (max-width: 1024px) {
    font-size: 36px;
    margin-bottom: 13px;
  }

  @media screen and (max-width: 760px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const Content1Text1 = styled.div`
  color: #5b5b5b;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    margin-bottom: 30px;
  }
`;

const Content1Box = styled.div`
  width: 1420px;
  height: 460px;
  border-radius: 40px;
  background: #f2f6ff;
  padding: 74px 206px;
  box-sizing: border-box;
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    width: 700px;
    height: 580px;
    padding: 50px 0;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 760px) {
    width: 319px;
    height: 530px;
    padding: 40px 0;
    border-radius: 20px;
    margin: 0 auto 30px auto;
  }
`;

const Content1BoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Content1BoxImg = styled.img`
  @media screen and (max-width: 1024px) {
    width: 230px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 760px) {
    width: 164px;
    margin-bottom: 30px;
  }
`;

const Content1BoxTitle = styled.h3`
  color: #1c1c1c;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;

  span {
    color: #1c459b;
  }

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    text-align: center;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 760px) {
    font-size: 18px;
    margin-bottom: 13px;
  }
`;

const Content1BoxText = styled.div`
  color: #5b5b5b;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  width: 585px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    text-align: center;
    line-height: 26px;
    width: 500px;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
    line-height: 25px;
    width: 287px;
  }
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

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 70px;
    line-height: 40px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 60px;
  }
`;

const Content2Title = styled.div`
  color: #1c459b;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 34px;
  }

  @media screen and (max-width: 760px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const Content2Wrap = styled.div`
  width: 1420px;
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  justify-content: space-between;
  margin-bottom: 200px;

  @media screen and (max-width: 1024px) {
    width: 700px;
    grid-template-columns: 48% 48%;
    grid-gap: 20px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    width: 319px;
    margin: 0 auto 60px auto;
  }
`;

const Content2Box = styled.div`
  width: 100%;
  height: 334px;
  border-radius: 20px;
  background: #f2f6ff;
  position: relative;
  padding: 52px 30px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    height: 250px;
    padding: 40px 30px;
  }

  @media screen and (max-width: 760px) {
    height: 232px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content2BoxTitle = styled.div`
  color: #353535;
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 15px;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 760px) {
    font-size: 20px;
    margin-top: 60px;
  }
`;

const Content2BoxText = styled.div`
  color: #5b5b5b;
  font-size: 17px;
  font-weight: 400;
  line-height: 26px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 25px;
  }

  @media screen and (max-width: 760px) {
    text-align: center;
    font-size: 15px;
    width: 250px;
  }
`;

const Content2BoxImg = styled.img<Props>`
  position: absolute;
  left: 91%;
  top: 90%;
  transform: translate(-100%, -100%);

  @media screen and (max-width: 1024px) {
    width: 60px;
  }

  @media screen and (max-width: 760px) {
    left: 50%;
    top: ${props => (props.isShorter ? '40%' : '34%')};
    transform: translate(-50%, -100%);
  }
`;

const Content3Wrap = styled.div`
  width: 100%;
  padding: 154px 312px;
  box-sizing: border-box;
  background-color: #1c459b;
  margin-bottom: 200px;

  @media screen and (max-width: 1024px) {
    padding: 70px 0;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 760px) {
    padding: 50px 0;
    margin-bottom: 60px;
  }
`;

const Content3Title = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 17px;

  @media screen and (max-width: 1024px) {
    font-size: 34px;
    text-align: center;
    width: 350px;
  }

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
`;

const Content3Text = styled.div`
  color: #fff;
  font-size: 25px;
  font-weight: 300;
  line-height: 44px;
  width: 508px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    width: 327px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    width: 272px;
  }
`;

const Content3Box = styled.div`
  display: flex;
  width: 612px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 580px;
  }

  @media screen and (max-width: 760px) {
    width: 310px;
  }
`;

const Content3Line = styled.div`
  width: 1px;
  height: 465px;
  background-color: #fff;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 420px;
  }

  @media screen and (max-width: 760px) {
    height: 230px;
  }
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

  @media screen and (max-width: 760px) {
    width: 8px;
    height: 8px;
    border: 2px solid #fff;
    left: -5px;
  }
`;

const Content3IconBoxWrap = styled.div`
  margin-left: 75px;

  @media screen and (max-width: 1024px) {
    margin-left: 35px;
  }

  @media screen and (max-width: 760px) {
    margin-left: 20px;
  }
`;

const Content3IconBox = styled.div<Props>`
  padding: 29px 45px;
  border-radius: 12px;
  background: #fff;
  display: flex;
  margin-bottom: ${props => (props.isMarginBottomNone ? '' : '40px')};
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin-bottom: ${props => (props.isMarginBottomNone ? '' : '25px')};
    padding: 29px 55px;
  }

  @media screen and (max-width: 760px) {
    padding: 12px 20px;
    margin-bottom: ${props => (props.isMarginBottomNone ? '' : '15px')};
  }
`;

const Content3Icon = styled.img`
  margin-right: 25px;

  @media screen and (max-width: 760px) {
    width: 28px;
    margin-right: 15px;
  }
`;

const Content3IconText = styled.div`
  color: #353535;
  font-size: 24px;
  font-weight: 500;
  line-height: 37px;

  @media screen and (max-width: 760px) {
    font-size: 14px;
    line-height: 23px;
  }
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

  @media screen and (max-width: 1024px) {
    font-size: 34px;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 760px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const Content4Text = styled.div`
  color: #5b5b5b;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 35px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    margin: 0 auto 25px auto;
    width: 309px;
  }
`;

const Content4BoxWrap = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  grid-gap: 27px;
  margin-bottom: 200px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 48% 48%;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    margin-bottom: 70px;
  }
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

  @media screen and (max-width: 1024px) {
    height: 210px;
  }

  @media screen and (max-width: 760px) {
    width: 319px;
    height: 88px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 10% 80%;
    justify-content: space-between;
    padding: 20px 30px;
    box-sizing: border-box;
    align-items: center;
  }
`;

const Content4BoxImg = styled.img`
  margin-bottom: 24px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 760px) {
    width: 36px;
    margin: 0;
  }
`;

const Content4BoxText = styled.div`
  color: #353535;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 33px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media screen and (max-width: 760px) {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    text-align: left;
  }
`;

const Content5Wrap = styled.div`
  width: 1300px;
  height: 630px;
  margin: 30px auto 200px auto;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 680px;
    height: 350px;
    margin: 60px auto 100px auto;
  }

  @media screen and (max-width: 760px) {
    width: 340px;
    height: 180px;
    margin: 60px auto 80px auto;
  }
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

  @media screen and (max-width: 1024px) {
    width: 288px;
    height: 288px;
  }

  @media screen and (max-width: 760px) {
    width: 148px;
    height: 148px;
  }
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

  @media screen and (max-width: 1024px) {
    width: 125px;
    height: 125px;
  }

  @media screen and (max-width: 760px) {
    width: 64px;
    height: 64px;
  }
`;

const Content5Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1024px) {
    width: 78px;
  }

  @media screen and (max-width: 760px) {
    width: 40px;
  }
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

  @media screen and (max-width: 1024px) {
    width: 214px;
    height: 60px;
    border-radius: 10px;
  }

  @media screen and (max-width: 760px) {
    width: 110px;
    height: 30px;
  }
`;

const Content5Partners = styled.img<Props>`
  opacity: 0.6;
  height: ${props => props.height};

  @media screen and (max-width: 1024px) {
    height: ${props => props.ipadHeight};
  }

  @media screen and (max-width: 760px) {
    height: ${props => props.mobileHeight};
  }
`;

const Content6Wrap = styled.div`
  width: 100%;
  padding: 100px 0;
  background: #1c459b;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 70px 0;
  }

  @media screen and (max-width: 760px) {
    padding: 50px 0;
  }
`;

const Content6Title = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    font-size: 34px;
    margin-bottom: 60px;
  }
`;

const Content6BoxForm = styled.form`
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
  width: 1082px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    width: 526px;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    width: 314px;
  }
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

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    grid-gap: 45px;
  }
`;

const Content6InputNameWrap = styled.div<Props>`
  position: relative;
  margin-bottom: ${props => (props.isMarginBottom ? '45px' : '')};
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
  font-size: 16px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 16px;
    color: #d2defa;
  }

  @media screen and (max-width: 760px) {
    height: 40px;
    font-size: 15px;

    ::placeholder {
      font-size: 15px;
      color: #d2defa;
    }
  }
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(238, 243, 255, 0.15);
  padding: 15px;
  box-sizing: border-box;
  font-size: 16px;
  color: #d2defa;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

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
  font-size: 16px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 300;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 17px;
    color: #d2defa;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    margin-bottom: 7px;

    ::placeholder {
      font-size: 15px;
      color: #d2defa;
    }
  }
`;

const Content6InputName = styled.div`
  position: absolute;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  top: -32px;
  left: 2px;

  @media screen and (max-width: 760px) {
    font-size: 14px;
    top: -28px;
  }
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

  @media screen and (max-width: 760px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Content6Text2 = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  line-height: 26px;
  margin-bottom: 25px;

  @media screen and (max-width: 760px) {
    font-size: 11.5px;
    margin-bottom: 17px;
  }
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
    width: 13px;
    margin-top: 0;
  }
`;

const CheckBoxText = styled.div`
  color: #fff;
  margin-left: 7px;
  font-size: 15px;
  font-weight: 300;

  @media screen and (max-width: 760px) {
    font-size: 13px;
  }
`;

const Content6Button = styled.button`
  width: 1082px;
  border-radius: 10px;
  background: #fff;
  border: none;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  color: #1c459b;
  font-weight: 800;
  margin: 0 auto;
  margin-top: 75px;

  @media screen and (max-width: 1024px) {
    width: 526px;
  }

  @media screen and (max-width: 760px) {
    margin-top: 50px;
    width: 314px;
    height: 40px;
    font-size: 15px;
    border-radius: 6px;
  }
`;

export default Main;
