'use strict';

const e = React.createElement;

const SOCIAL_GLYPHS_AND_LINKS = [
  {
    'glyphicon': 'fa fa-linkedin fa-2x',
    'url': 'https://www.linkedin.com/in/leandrovicentesilva/'
  },
  {
    'glyphicon': 'fa fa-youtube-play fa-2x',
    'url': 'http://youtube.com/levvitalk'
  },
  {
    'glyphicon': 'fa fa-instagram fa-2x',
    'url': 'http://instagram.com/levvitalk'
  },
  {
    'glyphicon': 'fa fa-facebook-square fa-2x',
    'url': 'http://facebook.com/levvitalk'
  }
];

 const generate_social_media_link = (social_network) => { 
    return <li> <a className={social_network.glyphicon} href={social_network.url} target="_blank"> </a> </li>
 };
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
          { SOCIAL_GLYPHS_AND_LINKS.map(generate_social_media_link) }
        </ul>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Bio), domContainer);