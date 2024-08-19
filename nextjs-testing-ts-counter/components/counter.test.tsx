// counter.test.tsx
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, screen, render, fireEvent } from '@testing-library/react';
import Counter from './counter';

describe('Counter component', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders with zero to start', () => {
    render(<Counter />);
    const counter = screen.getByRole('status');
    expect(counter.textContent).toBe('0');
  });
  it('renders 1 when the increment is pressed once', () => {
    render(<Counter />);
    const counter = screen.getByRole('status');
    const plusButton = screen.getByRole('button', { name: '+' });

    fireEvent.click(plusButton);

    expect(counter.textContent).toBe('1');
  });
  it('renders -1 when the decrement is pressed once', () => {
    render(<Counter />);
    const counter = screen.getByRole('status');
    const minusButton = screen.getByRole('button', { name: '-' });

    fireEvent.click(minusButton);

    expect(counter.textContent).toBe("-1");
  });
});
