import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { GetHeroByID } from '../helpers/GetHeroById';

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => GetHeroByID(id), [id]);
  const navigate = useNavigate();
  const onReturn = () => {
    navigate(-1);
  };
  if (!hero) return <Navigate to={'/marvel'} />;

  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__zoomInDown'>
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8 animate__animated animate__zoomInDown'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter Ego:</b>
            {hero.alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance:</b>
            {hero.first_appearance}
          </li>
          <h5 className='mt-3'>Characters</h5>
          <p>{hero.characters}</p>
        </ul>
        <button onClick={onReturn} className='btn btn-warning'>
          Regresar
        </button>
      </div>
    </div>
  );
};
