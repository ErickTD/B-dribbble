import React from 'react';
import LabelCardComponent from '../../components/card/label';
import img1 from '../../images/legal-salesforce.png';
import img2 from '../../images/legal-scalehr.png';
import img3 from '../../images/legal-slack.png';
import img4 from '../../images/legal-drive.png';

const cards = [
  {
    text: 'Link your templates to Salesforce objects, so Legal has control over contract updates.',
    img: img1,
  },
  {
    text: 'Sacel HR contract workflow from the tools your People team use every day.',
    img: img2,
  },
  {
    text: 'Get to inbox zero with notifications on new comments and signatures in Slack.',
    img: img3,
  },
  {
    text: 'Push pdf contracts automatically into folders of your existing GDrive.',
    img: img4,
  },
];

const IntegrationsContainer = () => (
  <section className="my-3 py-3 bg-light">
    <div className="container my-3 py-3">
      <h2 className="display-3 py-3 font-weight-bold w-100" style={{ maxWidth: '550px' }}>
        Integrations your team will love
      </h2>
      <div className="row g-5 mt-3">
        {cards.map((card) => (
          <div className="col-12 col-md-6">
            <LabelCardComponent key={card.title} img={card.img} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationsContainer;
