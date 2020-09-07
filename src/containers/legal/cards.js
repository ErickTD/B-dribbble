import React from 'react';
import VerticalCardComponent from '../../components/card/vertical';

const cards = [
  {
    title: 'Save time',
    text: 'Customers see up to 96% time savings on contract process.',
    icon: 'time',
  },
  {
    title: 'Redice risk',
    text: 'Keep track of key contract data and never miss a renewal deadline again.',
    icon: 'shield',
  },
  {
    title: 'Enable business',
    text: 'Deliver more value to your internal client with a legal front door.',
    icon: 'business',
  },
  {
    title: 'Become data-driven',
    text: 'See analytics on your workwlows and contracts and make smarter decisions.',
    icon: 'business',
  },
  {
    title: 'Deep insight',
    text: 'Get actionable insights before the contract is agreed, to help you win better terms.',
    icon: 'shield',
  },
  {
    title: 'Better UX',
    text: 'Deliver amazing experiences for you contract stakeholders',
    icon: 'time',
  },
];

const CardsContainer = () => (
  <section className="py-3 my-3">
    <div className="container py-3 my-3">
      <div className="row g-5 justify-content-around">
        {cards.map((card) => (
          <VerticalCardComponent
            key={card.title}
            title={card.title}
            text={card.text}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  </section>
);

export default CardsContainer;
