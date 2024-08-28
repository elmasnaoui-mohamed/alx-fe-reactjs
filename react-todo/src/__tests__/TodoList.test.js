import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test to verify the TodoList component renders correctly
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    // Check if the initial todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('allows users to add a new todo', () => {
    render(<TodoList />);
    // Simulate adding a new todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    // Check if the new todo is displayed
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test to verify that a todo item can be toggled between completed and not completed
  test('allows users to toggle a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    // Simulate toggling the todo item
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  // Test to verify that a todo item can be deleted
  test('allows users to delete a todo', () => {
    render(<TodoList />);
    // Simulate deleting a todo item
    fireEvent.click(screen.getByTestId('delete-button-1'));
    // Check if the deleted todo is not displayed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
