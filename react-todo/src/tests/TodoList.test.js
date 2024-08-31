import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders the todo list', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByRole('textbox');
        const button = screen.getByText('Add Todo');
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);
        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles todo completion', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('textDecoration: line-through');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);
        expect(screen.queryByText('Learn React')).toBeNull();
    });
});
