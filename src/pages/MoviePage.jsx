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

  const search = async (q) => {
    const query = await searchMovie(q)
    console.log({query : query})
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
      {HeaderNavbar()}
      {Main()}
      <div className="flex flex-row justify-between px-[90px] items-center mt-7">
        <h3 className="text-lg text-[white]">Popular Movies</h3>
        <a className="text-[red] text-sm" href="#">
          See All Movies
        </a>
      </div>
      <div className="flex flex-wrap">
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
