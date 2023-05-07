import React from 'react'
import Performers from '../components/Performers'
import Pointable from '../components/Pointable'

const Pointtable = async () => {

  const res = await fetch("http://127.0.0.1:5000/pointtable")
  const data = await res.json()

  // console.log(data);
  const pointabledata = data.pointtable
  // console.log(pointabledata);

  return (
    <>
      <div className='grid sm:grid-cols-3 lg:grid-cols-4'>
        <div>
          <Performers/>
        </div>
        <div className='sm:col-span-2 lg:col-span-3'>
        <Pointable pointable={pointabledata} />
        </div>
      </div>
    </>
  )
}

export default Pointtable
