import React, { useEffect, useState } from 'react'
import './App.css'
import { Pagination } from '@mui/material'
import Car from './components/Car/index';

interface CarType {
  image: string,
  title: string,
  start_production: number,
  class: string
}

function App() {
  const [cars, setCars] = useState<CarType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>([]);
  const [limit, setLimit] = useState<number>(8)

  async function getData(limit: number, page: number) {
    try {
      const resp = await fetch(`http://localhost:3000/machines?limit=${limit}&page=${currentPage}`);
      const data: CarType[] = await resp.json();
      setCars(data.results)
    } catch (error) {
      console.log(error);   
    }
  }

  useEffect(() =>{
   getData(limit, currentPage)
  }, [])

  function handleChange(e: React.ChangeEvent<unknown>, count: number) {
    getData(limit, count); 
  }

  return (
    <>
      <div className='container mt-5'>
        <div className="cars-wrapper d-flex flex-wrap">
        {
          cars.length > 0 && cars.map((car) => {
            return(
              <Car image={car.image} title={car.title} start_production={car.start_production} class={car.class}></Car>
            )
          })
        }
        </div>
      <Pagination onChange={handleChange} count={10} variant="outlined" shape="rounded" />
      </div>
    </>
  )
}

export default App
