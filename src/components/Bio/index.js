import React from 'react';

export default function Bio(props) {
    return (
      <React.Fragment>
        <h1>{props.name}</h1>
        <h2>{props.tagline}</h2>
      </React.Fragment>
    );
}