import React from 'react';
import SocialMediaList from './socialMediaList';

const SOCIAL_ICONS_AND_LINKS = [
  {
    'glyphicon': 'fa fa-linkedin fa-2x',
    'url': 'https://www.linkedin.com/in/leandrovicentesilva/',
    'name': 'linkedin'
  },
  {
    'glyphicon': 'fa fa-github fa-2x',
    'url': 'https://github.com/llevvi/',
    'name': 'github'
  },
  {
    'glyphicon': 'fa fa-youtube-play fa-2x',
    'url': 'http://youtube.com/levvitalk',
    'name': 'youtube'
  },
  {
    'glyphicon': 'fa fa-instagram fa-2x',
    'url': 'http://instagram.com/levvitalk',
    'name': 'instagram'
  }
];

export default function Bio(props) {
    return (
      <React.Fragment>
        <h1>{props.name}</h1>
        <h2>{props.tagline}</h2>
        <SocialMediaList iconsAndLinks = { SOCIAL_ICONS_AND_LINKS }/>
      </React.Fragment>
    );
}