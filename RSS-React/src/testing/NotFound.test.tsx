import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';

// Убедитесь, что страница 404 отображается при переходе по неверному маршруту.
test('404 page is displayed', () => {
  const badRoute = '/wrong/route';
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/page not exist/i)).toBeInTheDocument();
});
