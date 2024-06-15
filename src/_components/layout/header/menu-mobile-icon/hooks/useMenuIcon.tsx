import { LayoutContext } from '@/_providers/layoutProvider';
import { useContext } from 'react';

const useMenuIcon = () => {
  const { showMenu, setShowMenu } = useContext(LayoutContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return { showMenu, toggleMenu };
};

export default useMenuIcon;
