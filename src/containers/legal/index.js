import React from 'react';
import Layout from '../layout';
import BannerContainer from './banner';
import EditorContainer from './editor';
import CollaborationContainer from './collaboration';

const LegalContainer = () => (
  <Layout>
    <BannerContainer />
    <EditorContainer />
    <CollaborationContainer />
  </Layout>
);

export default LegalContainer;
