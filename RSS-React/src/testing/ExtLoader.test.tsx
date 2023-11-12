import { render, screen } from '@testing-library/react';
import PersonPage from '../pages/person';
import { MemoryRouter } from 'react-router-dom';

test('extended card loader is displayed ', () => {
  render(
    <MemoryRouter>
      <PersonPage />
    </MemoryRouter>
  );
  const loader = screen.queryByTestId('loader-element');
  expect(loader).toBeTruthy();
});
