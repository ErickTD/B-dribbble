import React from 'react';
import sections from './links';

const ColumnsComponent = () => (
  <div className="row">
    {sections.map((section) => (
      <div className="col">
        <h6 className="text-primary">{section.title}</h6>
        <ul className="nav flex-column">
          {section.links.map((link) => (
            <li className="nav-item">
              <a href={link.link} className="nav-link text-white">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default ColumnsComponent;
