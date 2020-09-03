import React from 'react';
import CardComponent from '../../components/card/thumbnail';
import img1 from '../../images/legal-teams.png';
import img2 from '../../images/sales-teams.png';
import img3 from '../../images/hr-teams.png';
import img4 from '../../images/developers.png';

const teams = [
  {
    title: 'Juro for legal teams',
    text: 'Scale contract workflow, enable business and get the insights you need',
    img: img1,
  },
  {
    title: 'Juro for legal teams',
    text: 'Scale contract workflow, enable business and get the insights you need',
    img: img2,
  },
  {
    title: 'Juro for legal teams',
    text: 'Scale contract workflow, enable business and get the insights you need',
    img: img3,
  },
  {
    title: 'Juro for legal teams',
    text: 'Scale contract workflow, enable business and get the insights you need',
    img: img4,
  },
];

const TeamsContainer = () => (
  <section className="py-3 my-3">
    <div className="container py-3">
      <div className="row gy-5 justify-content-between">
        {teams.map((team) => (
          <div className="col-5">
            <CardComponent team={team} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamsContainer;
