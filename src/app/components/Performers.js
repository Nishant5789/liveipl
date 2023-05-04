'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import React from 'react'


const Performers = () => {
  return (
    <>
    <div className="sm:hidden grid px-8 py-5 bg-pink-700 grid-cols-2">
        <div className="flex gap-x-2 px-2 items-center">
         <Image src="/vk_avatar.jpg" width={64} height={40} alt="no pic" className="object-cover h-16 rounded-3xl"/>
         <div className="">
           <h1 className="font-bold text-xl ">Top Runscorer</h1>
           <h2 className="font-serif">Virat Kohli</h2>
         </div>
        </div>
        <div className="flex gap-x-2 px-2 items-center">
         <Image src="/jh_avatar.jpg" width={64} height={40}  className="object-cover h-16 rounded-3xl" alt="no pic"/>
         <div>
           <h1 className="font-bold text-xl px-2">Top Wickettaker</h1>
           <h2 className="font-serif">Josh Hazlewood</h2>
         </div>
        </div>
     </div>
     <div class="bg-green-300 hidden sm:flex order-first flex-col gap-y-4 items-center">
        <div class="flex gap-x-4 py-5 items-center">
          <Image src="/vk_avatar.jpg" alt="no pic" width={64} height={40} class="object-cover h-16 rounded-3xl" />
          <div class="">
            <h1 class="font-bold text-xl">Top Runscorer</h1>
            <h2 class="font-serif"><span class="text-2xl font-semibold">1. </span> Virat Kohli</h2>
            <hr/>
          </div>
        </div>
        <div class="flex justify-center">
          <ul class="flex flex-col">
            <li><span class="text-lg font-semibold">2. </span> G Maxwell</li>
            <li><span class="text-lg font-semibold">3. </span> A Rahane</li>
            <li><span class="text-lg font-semibold">4. </span> K Rahul</li>
            <li><span class="text-lg font-semibold">5. </span> K Rahul</li>
          </ul>
        </div>
         <div class="flex gap-x-2 p-4 items-center">
          <Image src="/jh_avatar.jpg" width={64} height={40} class="object-cover h-16 rounded-3xl" alt="" />
          <div>
            <h1 class="font-bold text-xl">Top Wickettaker</h1>
            <h2 class="font-serif"><span class="text-2xl font-semibold">1. </span>Josh Hazlewood</h2>
            <hr/>
          </div>
         </div>
         <div class="flex justify-center">
          <ul class="flex flex-col">
            <li><span class="text-lg font-semibold">2. </span> G Maxwell</li>
            <li><span class="text-lg font-semibold">3. </span> A Rahane</li>
            <li><span class="text-lg font-semibold">4. </span> K Rahul</li>
            <li><span class="text-lg font-semibold">5. </span> K Rahul</li>
          </ul>
        </div>
      </div>
    </>
  )
}


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      // Polyfill for LCP
      const po = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        console.log('LCP:', entries[entries.length - 1])
      })
      po.observe({ type: 'largest-contentful-paint', buffered: true })
    }
  }, [])

  return <Performers  />
}



