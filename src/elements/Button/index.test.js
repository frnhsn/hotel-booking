import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import { BrowserRouter } from 'react-router-dom';

test("Should not allowed if button is disabled", () => {
    const {container} = render(<Button isDisabled></Button>);
    expect(container.querySelector('span.disabled')).toBeInTheDocument();
})

test("Loading... text present if button is loading", () => {
    const {container,getByText} = render(<Button isLoading></Button>);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector('span')).toBeInTheDocument();
})

test("If isExternal then it should render <a> tag", () => {
    const {container,getByText} = render(<BrowserRouter><Button href="" type="link"></Button></BrowserRouter>);
    expect(container.querySelector('a')).toBeInTheDocument();
})