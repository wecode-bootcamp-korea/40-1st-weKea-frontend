import { useEffect } from 'react';

const useOnOutSideClick = (ref, handler) => {
  useEffect(() => {
    const close = e => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', close);

    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, [ref, handler]);
};

export default useOnOutSideClick;
