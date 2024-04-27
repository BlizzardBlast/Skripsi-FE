import FallbackImg from '@/assets/fallback-image.png';
import LoadImage from '@/components/load-image/load-image';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('LoadImage', () => {
  const defaultProps = {
    source: 'test-image.jpg',
    testId: 'test-image',
    alternative: 'Test Image',
    classes: 'test-class',
    lazy: false,
    divClasses: 'div-class',
    onClick: vi.fn()
  };

  it('should render the image', () => {
    render(<LoadImage {...defaultProps} />);
    const image = screen.getByTestId('test-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Image');
  });

  it('should handle image load', () => {
    render(<LoadImage {...defaultProps} />);
    const image = screen.getByTestId('test-image');
    fireEvent.load(image);
    expect(image).toHaveClass('h-auto test-class');
  });

  it('should handle image error', () => {
    render(<LoadImage {...defaultProps} />);
    const image = screen.getByTestId('test-image');
    fireEvent.error(image);
    expect(image).toHaveAttribute('src', FallbackImg);
  });

  it('should handle click event', () => {
    render(<LoadImage {...defaultProps} />);
    const div = screen.getByTestId('img_div');
    fireEvent.click(div);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
