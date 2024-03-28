import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../heroes';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}));

describe('Tests on <SearcPage /> component', () => {

  beforeEach(() => jest.clearAllMocks() );

  test('should show default values', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect( container ).toMatchSnapshot();
  });

  test('should show batman and input with queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole<HTMLInputElement>('textbox');
    expect( input.value ).toBe('batman');

    const img = screen.getByRole<HTMLImageElement>('img');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
  });

  test('should show an error if the hero is not found', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=abc']}>
        <SearchPage />
      </MemoryRouter>
    );

    expect( screen.getByRole('alert') ).toBeTruthy();
    expect( screen.getByRole('alert').innerHTML ).toBe('No hero with <b>abc</b>');
  });

  test('should navigate to the new page', () => {
    const hero = 'flash';

    render(
      <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
        <SearchPage />
      </MemoryRouter> 
    );

    fireEvent.click( screen.getByRole('button', { name: 'Search' }) );

    expect( mockUseNavigate ).toHaveBeenCalled();
    expect( mockUseNavigate ).toHaveBeenCalledWith(`?q=${hero}`);
  });
});