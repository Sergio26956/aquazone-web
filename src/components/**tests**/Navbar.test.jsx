import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('El logo se muestra correctamente', () => {
  render(<Navbar />);
  expect(screen.getByAltText('Logo')).toBeInTheDocument();
});
