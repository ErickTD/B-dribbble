import React from 'react';
import Layout from '../layout';
import BannerContainer from './banner';
import EditorContainer from './editor';
import CollaborationContainer from './collaboration';
import OneSourceContainer from './onesource';
import ContractDataContainer from './data';

const LegalContainer = () => (
  <Layout>
    <BannerContainer />
    <EditorContainer />
    <CollaborationContainer />
    <OneSourceContainer />
    <ContractDataContainer />
  </Layout>
);

export default LegalContainer;
