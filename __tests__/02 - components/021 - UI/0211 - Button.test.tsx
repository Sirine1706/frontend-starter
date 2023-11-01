import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '../../../src/components/UI/Button';

describe("Button component", () => {
    it("It should render a button", () => {
        render(<Button text="Test" />);
        const text = screen.getByText('Test');
        expect(text).toBeDefined()
    })
})