import React from 'react';

interface IResizeWindowProps {
  opposite?: boolean
}

export default function useResizeWindow({ opposite = false }: IResizeWindowProps) {
  const [isSmallScreen, setIsSmallScreen] = React.useState(true);

  React.useEffect(() => {
    function checkScreenSize() {
      setIsSmallScreen(opposite ? window.innerWidth > 768 : window.innerWidth < 768)
    }

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    }
  }, [])

  return {
    isSmallScreen
  }
}