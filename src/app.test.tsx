import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App.tsx';

describe('Renders main page correctly', async () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render the page correctly', () => {
    render(<App />);
    const h1 = screen.queryByText('Ni Hao');

    expect(h1).toBeInTheDocument();
  });

  it('Should show the button count set to 0', () => {
    render(<App />);
    const button = screen.queryByText('Count is: 0');

    expect(button).toBeInTheDocument();
  });

  it('Should show the button count set to 3', async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.queryByText('Count is: 0');

    expect(button).toBeInTheDocument();

    // Actions
    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);

    expect(button?.innerHTML).toBe('Count is: 3');
  });
});
