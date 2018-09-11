import React from 'react';
import Social from './social.js';
export default class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Leandro Vicente</h1>
        <h2>Sofware Developer and Content Creator</h2>
        <Social />
      </div>
    );
  }
}