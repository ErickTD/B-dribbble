import React from 'react';
import BannerContainer from './banner';
import Layout from '../layout';
import CreateContainer from './create';
import CollaborateContainer from './collaborate';
import FasterContainer from './faster';
import ControlContainer from './control';
import TeamsContainer from './teams';
import WoltContainer from './wolt';

const HomeContainer = () => (
  <Layout>
    <BannerContainer />
    <CreateContainer />
    <CollaborateContainer />
    <FasterContainer />
    <ControlContainer />
    <WoltContainer />
    <TeamsContainer />
  </Layout>
);

export default HomeContainer;
