import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders the todo list with initial items', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });

    test('allows users to add new todos', () => {
        render(<TodoList />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Task' } });
        fireEvent.click(screen.getByText('Add Todo'));
        expect(screen.getByText('New Task')).toBeInTheDocument();
    });

    test('toggles todo completion on click', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoItem);
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    });

    test('allows users to delete todos', () => {
        render(<TodoList />);
        const deleteButtons = screen.getAllByText('Delete');
        fireEvent.click(deleteButtons[0]);
        expect(screen.queryByText('Learn React')).toBeNull();
    });
});
