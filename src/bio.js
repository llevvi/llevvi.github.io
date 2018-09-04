'use strict';

const e = React.createElement;

class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Leandro Vicente</h1>
        <h2>Sofware Developer and Content Creator</h2>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Bio), domContainer);