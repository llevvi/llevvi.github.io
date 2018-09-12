import React from 'react';
import SocialMediaList from './socialMediaList';
import { SOCIAL_ICONS_AND_LINKS } from './constants';

export default function Bio(props) {
    return (
      <React.Fragment>
        <h1>{props.name}</h1>
        <h2>{props.tagline}</h2>
        <SocialMediaList iconsAndLinks = { SOCIAL_ICONS_AND_LINKS }/>
      </React.Fragment>
    );
}