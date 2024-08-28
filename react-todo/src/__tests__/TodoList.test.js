import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders the TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
});
