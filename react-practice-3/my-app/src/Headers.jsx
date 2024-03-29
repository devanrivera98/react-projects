import CryptoJS from 'crypto-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export function Headers() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  let date = new Date().getTime().toString();
  console.log(date);

  // const crypto = require('crypto');

  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY;

  const ts = new Date().getTime().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  console.log(hash);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&name=${search}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      console.log('This is the results', jsonData);
      console.log(jsonData.data.results[0].name);
      navigate('/results', { state: jsonData });
      setSearch('');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  // fetch(apiUrl)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error('There was a problem with the fetch operation:', error);
  //   });

  return (
    <div>
      <nav className="bg-customRed">
        <div className="flex justify-between align-middle">
          <div className="text-[40px] p-4">
            <a href="https://www.marvel.com/">Marvel</a>
          </div>
          <div>
            <ul className="flex flex-row pr-4 items-center">
              <li className="p-4 hover:text-white text-[40px]">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4 text-[40px]">Characters</li>
              <li className="p-4 text-[40px]">artist</li>
              <li className="p-4">
                <form onSubmit={handleSubmit}>
                  <input onChange={handleChange} value={search}></input>
                  <button
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:ring focus:ring-blue-300"
                    type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
