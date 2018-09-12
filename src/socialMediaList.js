import React from "react";

export default function SocialMediaList(props) {
  return (
    <ul className="social-media-list">
      {
        props.iconsAndLinks.map( (social_network, key) => 
          <li key={key}> 
            <a className={social_network.glyphicon} 
            href={social_network.url} 
            target="_blank" 
            aria-label={`${social_network.name} link`}>
            </a> 
          </li>
        )
      }
    </ul>
  );
}