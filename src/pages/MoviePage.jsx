import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MovieList } from '../assets/components/MovieList';
import { Main } from '../assets/components/Main';
import { HeaderNavbar } from '../assets/components/HeaderNavbar';
import { searchMovie } from '../api';

export const MoviePage = () => {
  const [dataAwal, setDataAwal] = useState([]);
  const [loadData, setLoadData] = useState([]);
  const [dataSearch, setDataSearch] = useState("");
  const [query, setQuery] = useState('')

  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_SERVER}3/movie/popular`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  };

  const getDataMovie = async () => {
    axios.request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.results);
        setLoadData(response.data.results);
        setDataAwal(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const search = async (q) => {
  //   const query = await searchMovie(q)
  //   console.log({query : query})
  // }

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=9e7527faab160348ac8893a2623869b5&query=${query}`
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      getDataMovie(data.results)
    }
    catch (e) {
      console.log(e)
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    getDataMovie();
  }, []);

  // const filterData = (e) => {
  //   setLoadData(
  //     dataAwal.filter((valueFilter) => valueFilter.name.includes(dataSearch))
  //   );
  // };

  return (
    <div className="bg-[#1e1e2a]">
      <div className='flex justify-between px-4 py-4 items-center'>
        <div>
            <h1 className='text-[40px] font-bold text-[red]'>Movielist</h1>
        </div>
        <div className='flex flex-row justify-between items-center' onSubmit={searchMovie}>
            <input value={query} onChange={changeHandler} className='text-white rounded-2xl border-[red] border-[2px] bg-transparent w-[350px] p-2 placeholder-[white]' type='search' placeholder='What do you want to watch?'></input> 
            <button type='submit' className='absolute text-white items-center ml-[300px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button>
        </div>
        <div className='flex space-x-2 items-center'>
            <a className='border-[red] border-[2px] bg-transparent  px-[10px] py-[5px] rounded-xl text-[red] cursor-pointer' href='#'>Login</a>
            <a className='border-[red] border-[2px] bg-[red]  px-[10px] py-[5px] rounded-xl text-[white] cursor-pointer' href='#'>Register</a>
        </div>
    </div>
      {Main()}
      <div className="flex flex-row justify-between px-[90px] items-center mt-7">
        <h3 className="text-lg text-[white]">Popular Movies</h3>
        <a className="text-[red] text-sm" href="#">
          See All Movies
        </a>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {loadData.map((value, index) => {
          return (
            <MovieList
              key={index}
              setData={setLoadData}
              dataMovie={value}
              dataAll={loadData}
            ></MovieList>
          );
        })}
      </div>
    </div>
  );
}
