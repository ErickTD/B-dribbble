import React from 'react';
import PropTypes from 'prop-types';
import IconComponent from '../icon';

const CardComponent = ({ team }) => (
  <div className="card border-0">
    <div className="row justify-content-between align-items-center">
      <div className="col-4">
        <img className="img-fluid rounded" alt="" src={team.img} />
      </div>
      <div className="col-8">
        <h6 className="text-primary">
          {team.title}
          <IconComponent icon="arrow-r" extraClass="ml-3" />
        </h6>
        <p>{team.text}</p>
      </div>
    </div>
  </div>
);

CardComponent.propTypes = {
  team: PropTypes.object.isRequired,
};

export default CardComponent;
