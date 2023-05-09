import Image from 'next/image'
import React from 'react'

const Batleaderbord = ({batlist}) => {

  return (
    <>
        <div className="flex gap-x-4 py-5 items-center">
          <Image src="/vk_avatar.jpg" alt="no pic" width={64} height={40} className="object-cover h-16 rounded-3xl" />
          <div className="">
            <h1 className="font-bold text-xl">Top Runscorer</h1>
            <h2 className="font-serif"><span className="text-2xl font-semibold">1. </span> {batlist[0].name}</h2>
            <hr/>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col">
          {
            batlist.splice(1,4).map((currele, index)=>{
              return <li key={index}>
              <span className="text-lg font-semibold">{index+2}. </span> 
              {currele.name}</li>;
            })
          }
          </ul>
        </div>
    </>
  )
}

export default Batleaderbord
