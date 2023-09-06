import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';

const Mail = () => {
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

  return (
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
  );
};

interface Props {
  isMarginBottom?: boolean;
}

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

export default Mail;
