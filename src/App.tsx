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

  useEffect(() =>{
    fetch("http://localhost:3000/all")
    .then(res => res.json())
    .then((data: CarType[]) => {
      setCars(data);
    })
    .catch((err: Error) => {
      console.log(err);
      
    })
  }, [])
  


  function handleChange(e: React.ChangeEvent<unknown>, count: number) {
    console.log(count);
    console.log(e);
    
    
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
