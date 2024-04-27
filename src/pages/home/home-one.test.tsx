import HomeOne from '@/pages/home/home-one';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

const intersectionObserverMock = (): {
  observe: () => null;
} => ({
  observe: () => null
});
window.IntersectionObserver = vi
  .fn()
  .mockImplementation(intersectionObserverMock);

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
    expect(screen.getByTestId('paragraph-home-one')).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: 'Discover Your Preference'
      })
    ).toBeInTheDocument();
  });
  it('should render the LeafImage component', () => {
    render(
      <MemoryRouter>
        <HomeOne />
      </MemoryRouter>
    );
    expect(screen.getByTestId('left-leaves')).toBeInTheDocument();
    expect(screen.getByTestId('right-leaves')).toBeInTheDocument();
  });

  it('should render the Paragraph component with specific text', () => {
    render(
      <MemoryRouter>
        <HomeOne />
      </MemoryRouter>
    );
    const paragraphText =
      "At Kofebin, we firmly believe in the uniqueness of individual coffee preferences. That's why we invite you to embark on a journey of discovery with us. The world of coffee is far richer and more diverse than you may imagine. Join us as we explore and uncover the perfect coffee tailored to your discerning palate.";
    expect(screen.getByText(paragraphText)).toBeInTheDocument();
  });

  it('should render the Button component with a Link inside it', () => {
    render(
      <MemoryRouter>
        <HomeOne />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', { name: 'Discover Your Preference' })
    ).toBeInTheDocument();
  });
});
