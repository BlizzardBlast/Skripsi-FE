import HomeOne from '@/pages/home/homeOne.tsx';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('Input', async () => {
  it('should render the input', () => {
    render(
      <MemoryRouter>
        <HomeOne />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Discover Your Coffee Preference')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: 'Discover Your Preference'
      })
    ).toBeInTheDocument();
  });
});
