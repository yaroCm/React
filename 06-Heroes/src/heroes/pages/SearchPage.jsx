import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroItem } from '../components/HeroItem';
import queryString from 'query-string';
import { GetHeroByName } from '../helpers/GetHeroByName';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = GetHeroByName(q);
  const initialForm = {
    searchText: q,
  };
  const { searchText, onInputChange } = useForm(initialForm);
  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 2) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
    console.log('searchText:', searchText);
  };
  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              value={searchText}
              className='form-control'
              placeholder='Search a Hero'
              name='searchText'
              id='searchText'
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {!q && <div className='alert alert-primary'>Search a Hero</div>}
          {q.length >= 1 && heroes.length === 0 && (
            <div className='alert alert-danger'>
              We don't found <strong>{q}</strong>
            </div>
          )}
          {heroes.map((hero) => (
            <HeroItem key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
