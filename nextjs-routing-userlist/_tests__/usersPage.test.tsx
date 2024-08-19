// __tests__/Page.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Page from '../app/users/page';

describe('Users page', () => {
  it('renders the heading to the page correctly', () => {
    render(<Page />);
    const header = screen.getByRole('heading');
    expect(header.textContent).toBe('Users Page');
  });
  it('renders a users list item in the correct format', () => {
    // note the data is hardcoded here
    render(<Page />);
    const firstListItem = screen.queryByText('E. Morris');
    expect(firstListItem).toBeInTheDocument();
  });
});
