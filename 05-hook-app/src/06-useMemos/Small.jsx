import { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Me dibuje :C ');
  return <small>{value}</small>;
});
