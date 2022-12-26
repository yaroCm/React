import { Link } from 'react-router-dom';

const CharacterByHero = ({ characters, alter_ego }) =>
  characters === alter_ego ? (
    <p className='card-text'>{alter_ego}</p>
  ) : (
    <p className='card-text'>{characters}</p>
  );

export const HeroItem = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImg = `/assets/heroes/${id}.jpg`;
  return (
    <div className='col '>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImg} className='card-img' alt={superhero} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <CharacterByHero characters={characters} alter_ego={alter_ego} />
              <p className='card-text'>{first_appearance}</p>
              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
