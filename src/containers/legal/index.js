import React from 'react';
import Layout from '../layout';
import BannerContainer from './banner';
import EditorContainer from './editor';
import CollaborationContainer from './collaboration';
import OneSourceContainer from './onesource';
import ContractDataContainer from './data';
import CardsContainer from './cards';
import IntegrationsContainer from './integrations';

const LegalContainer = () => (
  <Layout>
    <BannerContainer />
    <EditorContainer />
    <CollaborationContainer />
    <OneSourceContainer />
    <ContractDataContainer />
    <CardsContainer />
    <IntegrationsContainer />
  </Layout>
);

export default LegalContainer;
