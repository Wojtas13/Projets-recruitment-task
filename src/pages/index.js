import React from 'react';

import SliderWrapper from '../components/SliderWrapper/SliderWrapper';
import Layout from '../components/Layout/Layout';
import News from '../components/News/News';

const IndexPage = () => (
  <Layout>
    <SliderWrapper />
    <News />
  </Layout>
);

export default IndexPage;
