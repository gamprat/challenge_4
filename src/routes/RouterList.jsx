import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MoviePage } from '../pages/MoviePage'
import { MovieDetail } from '../pages/MovieDetail';

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviePage></MoviePage>}></Route>
        <Route path="/Detail Page" element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
