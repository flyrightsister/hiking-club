import React from 'react';
import './Journal.scss';

const Journal = function(props) {
  return (
    <div className="journal-container">
      <h4 className="journal-title">{props.title}</h4>
      <p>{props.entry}</p>
    </div>
  );
};

export default Journal;
