import React from 'react';
import BannerContainer from './banner';
import Layout from '../layout';
import CreateContainer from './create';
import CollaborateContainer from './collaborate';
import FasterContainer from './faster';
import ControlContainer from './control';
import TeamsContainer from './teams';

const HomeContainer = () => (
  <Layout>
    <BannerContainer />
    <CreateContainer />
    <CollaborateContainer />
    <FasterContainer />
    <ControlContainer />
    <TeamsContainer />
  </Layout>
);

export default HomeContainer;
