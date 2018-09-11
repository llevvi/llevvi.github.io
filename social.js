var SOCIAL_GLYPHS_AND_LINKS = [{
  'glyphicon': 'fa fa-linkedin fa-2x',
  'url': 'https://www.linkedin.com/in/leandrovicentesilva/'
}, {
  'glyphicon': 'fa fa-youtube-play fa-2x',
  'url': 'http://youtube.com/levvitalk'
}, {
  'glyphicon': 'fa fa-instagram fa-2x',
  'url': 'http://instagram.com/levvitalk'
}, {
  'glyphicon': 'fa fa-facebook-square fa-2x',
  'url': 'http://facebook.com/levvitalk'
}];

export default Social = function Social() {
  React.createElement(
    'ul',
    { className: 'redes' },
    SOCIAL_GLYPHS_AND_LINKS.map(generate_social_media_link)
  );
};