import React from 'react';
import { render } from 'react-testing-library';
import SocialMediaList from '../socialMediaList';

describe('Social component', () => {

    const social_icon_and_link = [{
        'glyphicon' : 'foo',
        'url' : 'bar',
        'name' : 'fooName'
    }];

    const expectedElement = 
    "<ul class=\"social-media-list\">"+
        "<li><a class=\"foo\" href=\"bar\" target=\"_blank\" aria-label=\"fooName link\"></a></li>"+
    "</ul>"

    test('Renders a proper list element with href and glyphicon when passing an object with them', () => {
        const { container } = render(<SocialMediaList iconsAndLinks = { social_icon_and_link } />);
        expect(container.innerHTML).toBe(expectedElement);
    });
});