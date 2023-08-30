import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Main: NextPage = () => {
  return (
    <Layout>
      <div>
        <MainImg src='/image/main-cover.jpg' />
        <Some />
      </div>
    </Layout>
  );
};

const MainImg = styled.img`
  width: 100%;
  height: 100vh;
`;

const Some = styled.div`
  height: 1000px;
`;

export default Main;
