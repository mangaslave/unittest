import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock('mongoose', () => ({
  connect: jest.fn(),
  connection: {
    on: jest.fn(),
  },
}));

test('renders GetToDoItem component', () => {
    render(<App />);
    const linkElement = screen.getByText('My To Do Items');
    expect(linkElement).toBeInTheDocument();
});
