import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Optional: Provides additional matchers for assertions
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component correctly', () => {
    render(<TodoList />);
    const headingElement = screen.getByText(/Todo List/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText(/Add todo/i);
    const buttonElement = screen.getByText(/Add/i);

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(buttonElement);

    const newItem = screen.getByText('New Todo');
    expect(newItem).toBeInTheDocument();
  });
});
