'use client';

import useThemeSwitcher from './hooks/useThemeSwitcher';

const ThemeSwitcher = () => {
  const { toggleTheme } = useThemeSwitcher();

  return (
    <>
      <button onClick={() => toggleTheme()}>Switch theme</button>
    </>
  );
};

export default ThemeSwitcher;
