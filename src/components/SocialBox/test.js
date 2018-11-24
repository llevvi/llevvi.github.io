import React from 'react'
import SocialBox from './index'
import { SOCIAL_ICONS_AND_LINKS } from '../../constants'
import { shallow } from 'enzyme'

describe('SocialBox', () => {
  it('renders as expected', () => {
    const socialMedia = shallow(<SocialBox iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />)
    expect(socialMedia).toMatchSnapshot()
  })
})