import React from 'react';
import Social from './social.js';
export default class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Leandro Vicente</h1>
        <h2>Software Developer and Content Creator</h2>
        <Social />
      </React.Fragment>
    );
  }
}