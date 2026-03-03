// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GraphFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GraphFlow/i);
    expect(titleElement).toBeInTheDocument();
});
