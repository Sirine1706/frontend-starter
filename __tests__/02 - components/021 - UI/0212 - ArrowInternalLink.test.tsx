import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ArrrowInternalLink from '../../../src/components/UI/ArrrowInternalLink';

describe("ArrowLinkButton component", () => {
    it("It should render a link button with arrow svg", () => {
        render(<BrowserRouter>
        <ArrrowInternalLink text="link" path="/" />
        </BrowserRouter>);
        const text = screen.getByText('link');
        expect(text).toBeDefined()
    })
    it("should appear the 'svg' on hover", () => {
        render(
          <BrowserRouter>
            <ArrrowInternalLink text="link" path="/" />
          </BrowserRouter>
        );
        const linkElement = screen.getByText('link'); 
        fireEvent.mouseEnter(linkElement); 
        const svg =  screen.getByTestId('arrow-down');
        expect(svg).toBeDefined();
      });
})