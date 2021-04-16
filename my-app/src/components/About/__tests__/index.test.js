// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensure after each test memory is cleared
afterEach(cleanup);

// describe function to declare component we're testing
describe('About component', () => {
    //renders first About test
    it('renders', () => {
        render(<About />);
    });
    //renders second About test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})