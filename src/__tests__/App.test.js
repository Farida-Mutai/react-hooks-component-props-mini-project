// src/__tests__/App.test.js
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders the correct child components', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.App')).toBeInTheDocument();
  expect(container.querySelector('.App header')).not.toBeInTheDocument();
  expect(container.querySelector('.App aside')).toBeInTheDocument();
  expect(container.querySelector('.App main')).toBeInTheDocument();
});
