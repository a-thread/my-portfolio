import { describe, it, expect, vi } from 'vitest';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

function mockMatchMedia(matches: boolean) {
  const listeners: ((event: MediaQueryListEvent) => void)[] = [];
  window.matchMedia = vi.fn().mockReturnValue({
    matches,
    media: '(prefers-color-scheme: dark)',
    addEventListener: (_event: string, cb: (event: MediaQueryListEvent) => void) => {
      listeners.push(cb);
    },
    removeEventListener: vi.fn(),
  } as unknown as MediaQueryList);

  return {
    emitChange: (nextMatches: boolean) =>
      listeners.forEach((cb) => cb({ matches: nextMatches } as MediaQueryListEvent)),
  };
}

const Probe = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <span data-testid="mode">{isDarkMode ? 'dark' : 'light'}</span>
      <button onClick={toggleDarkMode}>toggle</button>
    </div>
  );
};

describe('DarkModeContext', () => {
  it('initializes from the system color-scheme preference', () => {
    mockMatchMedia(true);
    render(
      <DarkModeProvider>
        <Probe />
      </DarkModeProvider>
    );

    expect(screen.getByTestId('mode')).toHaveTextContent('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles the mode and the html class on click', () => {
    mockMatchMedia(false);
    render(
      <DarkModeProvider>
        <Probe />
      </DarkModeProvider>
    );

    expect(screen.getByTestId('mode')).toHaveTextContent('light');
    fireEvent.click(screen.getByText('toggle'));
    expect(screen.getByTestId('mode')).toHaveTextContent('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('follows OS preference changes after mount', () => {
    const { emitChange } = mockMatchMedia(false);
    render(
      <DarkModeProvider>
        <Probe />
      </DarkModeProvider>
    );

    expect(screen.getByTestId('mode')).toHaveTextContent('light');
    act(() => emitChange(true));
    expect(screen.getByTestId('mode')).toHaveTextContent('dark');
  });

  it('throws when useDarkMode is used outside a provider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const Bare = () => {
      useDarkMode();
      return null;
    };

    expect(() => render(<Bare />)).toThrow('useDarkMode must be used within a DarkModeProvider');
    consoleError.mockRestore();
  });
});
