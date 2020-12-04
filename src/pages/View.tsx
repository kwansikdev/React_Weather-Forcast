import React from 'react';
import Layout from '../components/Common/Layout';
import DetailViewContainer from '../container/DetailViewContainer';
import * as S from './Styled';

export default function View() {
  return (
    <Layout>
      <DetailViewContainer />
    </Layout>
  );
}
