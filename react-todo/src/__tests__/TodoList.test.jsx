import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensures we have additional matchers for Jest
import TodoList from '../TodoList'; // Import the TodoList component

describe('TodoList Component', () => {
  // Test for initial render
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    // Verify that the initial todos are rendered correctly
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo List')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  // Test for adding a new todo
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Verify that the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test for toggling a todo item between completed and not completed
  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // Simulate user click to toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Click again to toggle back
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test for deleting a todo
  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    // Simulate user click to delete
    fireEvent.click(deleteButton);

    // Verify that the todo is deleted
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
