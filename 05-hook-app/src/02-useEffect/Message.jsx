import { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    //MONTAR
    console.log('MOUNTED');
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      //DESMONTAR
      console.log('UNMOUNTED');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <>
      <h3 className='mt-2'>Usuario ya existe</h3>
    </>
  );
};
