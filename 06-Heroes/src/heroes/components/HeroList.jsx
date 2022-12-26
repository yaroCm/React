import React, { useMemo } from 'react';
import { GetHeroByPublisher } from '../helpers/GetHeroByPublisher';
import { HeroItem } from './HeroItem';

export const HeroList = ({ publisher }) => {
  const heros = useMemo(() => GetHeroByPublisher(publisher), [publisher]);
  return (
    <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
      {heros.map((hero) => (
        <HeroItem key={hero.id} {...hero} />
      ))}
    </div>
  );
};
