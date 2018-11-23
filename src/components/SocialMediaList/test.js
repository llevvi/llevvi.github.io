import React from 'react'
import SocialMediaList from './index'
import { SOCIAL_ICONS_AND_LINKS } from '../../constants';
import { shallow } from 'enzyme'

describe('SocialMediaList', () => {
  it('renders as expected', () => {
    const socialMedia = shallow(<SocialMediaList iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />)
    expect(socialMedia).toMatchSnapshot()
  })
})