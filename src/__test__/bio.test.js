import React from 'react';
import { render } from 'react-testing-library';
import Bio from '../bio';

describe('Bio in Home Page', () => {
    test("renders person's name and tagline", () => {
        const { queryByText } = render(<Bio name="foo" tagline="bar" />);
        const name = queryByText('foo');
        const description = queryByText('bar');

        expect(name).toBeTruthy();
        expect(description).toBeTruthy();
    });
});
