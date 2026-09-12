import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './index';
import { DarkModeProvider } from '@shared/state/DarkModeContext';

beforeEach(() => {
  window.matchMedia = vi.fn().mockReturnValue({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }) as unknown as typeof window.matchMedia;
});

function renderNav(initialEntries = ['/']) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <DarkModeProvider>
        <Navigation />
      </DarkModeProvider>
    </MemoryRouter>
  );
}

describe('Navigation', () => {
  it('highlights the active page link', () => {
    renderNav(['/projects']);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Résumé' })).not.toHaveAttribute('aria-current');
  });

  it('toggles dark mode when the toggle button is clicked', () => {
    renderNav();

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    fireEvent.click(screen.getByRole('button', { name: /toggle dark mode/i }));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('scrolls to a section instead of navigating when already on the home page', () => {
    renderNav(['/']);
    const scrollIntoView = vi.fn();
    const section = document.createElement('div');
    section.id = 'impact';
    section.scrollIntoView = scrollIntoView;
    document.body.appendChild(section);

    fireEvent.click(screen.getByRole('link', { name: 'Impact' }));

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    document.body.removeChild(section);
  });
});
