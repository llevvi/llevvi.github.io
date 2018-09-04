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
        <ul className="redes">
          <li>
            <a className="fa fa-linkedin fa-2x" href="https://www.linkedin.com/in/leandrovicentesilva/" target="_blank"></a>
          </li>
          <li>
              <a className="fa fa-youtube-play fa-2x" href="http://youtube.com/levvitalk" target="_blank"></a>
          </li>
          <li>
              <a className="fa fa-instagram fa-2x" href="http://instagram.com/levvitalk" target="_blank"></a>
          </li>
          <li>
              <a className="fa fa-twitter fa-2x" href="http://twitter.com/levvitalk" target="_blank"></a>
          </li>
          <li>
              <a className="fa fa-facebook-square fa-2x" href="http://facebook.com/levvitalk" target="_blank"></a>
          </li>
        </ul>	
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Bio), domContainer);