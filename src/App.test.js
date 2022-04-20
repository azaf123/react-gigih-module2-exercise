import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import SearchHook from './pages/search/hook';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();

// });

test('input renders correctly',() =>{
  render(<SearchHook />);
  const inputElement = screen.getByRole('textbox');
  userEvent.type(inputElement, 'test');
  expect(inputElement).toHaveValue('test');
});
