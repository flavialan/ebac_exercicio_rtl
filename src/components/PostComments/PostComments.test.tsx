import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Comentario 1',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'Comentario 2',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));

        expect(screen.getAllByTestId('comentario-post')).toHaveLength(2);
    });
});