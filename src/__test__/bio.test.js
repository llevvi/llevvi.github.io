import React from 'react';
import { render } from 'react-testing-library';
import Bio from '../bio';

describe('Bio in Home', () => {
    test("renders person's name and description", () => {
        const { queryByText } = render(<Bio />);
        const name = queryByText('Leandro Vicente');
        const description = queryByText('Software Developer and Content Creator');

        expect(name).toBeTruthy();
        expect(description).toBeTruthy();
    });
});
