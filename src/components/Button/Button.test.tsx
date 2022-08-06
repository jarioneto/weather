import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

const defaultProps = {
  isLoading: false
};

const renderComponent = (props = defaultProps) =>
  render(<Button {...props}>Cancel</Button>);

describe('Button component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });

  test('Should execute function on click', async () => {
    const props = {
      ...defaultProps,
      onClick: jest.fn()
    };

    renderComponent(props);

    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() => {
      expect(props.onClick).toHaveBeenCalled();
    });
  });

  test('Should display loader text', () => {
    const props = {
      loadingText: 'Carregando..',
      isLoading: true
    };

    renderComponent(props);

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  test('Should disable button if isLoading is true', () => {
    const props = {
      isLoading: true
    };

    renderComponent(props);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
