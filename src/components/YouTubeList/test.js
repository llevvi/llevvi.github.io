import React from 'react'
import { shallow } from 'enzyme'
import YouTubeList from '.'

describe('YouTube List', () => {
  it('Renders YouTube List component correctly', () => {
    const youtubeList = shallow(<YouTubeList />)
    expect(youtubeList).toMatchSnapshot()
  })
})