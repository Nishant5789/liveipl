'use client';
import { useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import React from 'react'



const Matchlist = () => {
  return (
    <>
    <Script src='/flowbite.min.js'/>
    <div id="indicators-carousel" className="sm:hidden relative w-full" data-carousel="static"> 
        <div className="relative h-56 bg-pink-300 overflow-hidden rounded-lg">
            <div className="hidden duration-700  ease-out" data-carousel-item="active">
              <div className="rounded-2xl mx-14 h-56">
                <h1 className="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
                <div className="pt-4 pb-1 flex-col">
                  <div className="flex justify-around gap-x-3 pb-3">
                    <Image src="/rcb_logo.jpg" alt="" width={5} height={5} />
                    <span className="flex-grow  text-lg font-serif">RCB</span>
                    <p className="text-xl fontbold font-sans">126-9 (20)</p>
                  </div>
                  <div className="flex gap-x-3">
                    <Image src="/lsg_log.jpg" className="text-lg font-serif" alt="" width={5} height={5} />
                    <span className="flex-grow">LSG</span>
                    <p className="text-xl fontbold font-sans">108 (19.5)</p>
                  </div>
                </div>
                <p className="py-4">Royal Challenge banglore Won by 18r...</p>
              </div>
              </div>
            {/* <!-- Item 2 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="rounded-2xl mx-14 h-56">
                <h1 className="text-xl  py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
                <div className="py-6 flex-col">
                  <div className="flex justify-around gap-x-3 pb-3">
                    <Image src="/rcb_logo.jpg" alt="" width={5} height={5} />
                    <span className="flex-grow  text-lg font-serif">RCB</span>
                    <p className="text-xl fontbold font-sans">126-9 (20)</p>
                  </div>
                  <div className="flex gap-x-3">
                    <Image src="/lsg_log.jpg" className="text-lg font-serif" alt="" width={5} height={5} />
                    <span className="flex-grow">LSG</span>
                    <p className="text-xl fontbold font-sans">108 (19.5)</p>
                  </div>
                </div>
                <p className="px-4">Royal Challenge banglore Won by 18r...</p>
              </div>       
            </div>
            {/* <!-- Item 3 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="rounded-2xl mx-14 h-56">
                <h1 className="text-xl  py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
                <div className="py-6 flex-col">
                  <div className="flex justify-around gap-x-3 pb-3">
                    <Image src="/rcb_logo.jpg" alt="" width={5} height={5} />
                    <span className="flex-grow  text-lg font-serif">RCB</span>
                    <p className="text-xl fontbold font-sans">126-9 (20)</p>
                  </div>
                  <div className="flex gap-x-3">
                    <Image src="/lsg_log.jpg" className="text-lg font-serif" alt="" width={5} height={5} />
                    <span className="flex-grow">LSG</span>
                    <p className="text-xl fontbold font-sans">108 (19.5)</p>
                  </div>
                </div>
                <p>Royal Challenge banglore Won by 18r...</p>
              </div>           
         </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="rounded-2xl mx-14 h-56">
                <h1 className="text-xl  py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
                <div className="py-6 flex-col">
                  <div className="flex justify-around gap-x-3 pb-3">
                    <Image src="/rcb_logo.jpg" alt="" width={5} height={5} />
                    <span className="flex-grow  text-lg font-serif">RCB</span>
                    <p className="text-xl fontbold font-sans">126-9 (20)</p>
                  </div>
                  <div className="flex gap-x-3">
                    <Image src="/lsg_log.jpg" className="text-lg font-serif" alt="" width={5} height={5} />
                    <span className="flex-grow">LSG</span>
                    <p className="text-xl fontbold font-sans">108 (19.5)</p>
                  </div>
                </div>
                <p>Royal Challenge banglore Won by 18r...</p>
              </div>      
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="rounded-2xl mx-14 h-56">
                <h1 className="text-xl  py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
                <div className="py-6 flex-col">
                  <div className="flex justify-around gap-x-3 pb-3">
                    <Image src="/rcb_logo.jpg" alt="" width={5} height={5} />
                    <span className="flex-grow  text-lg font-serif">RCB</span>
                    <p className="text-xl fontbold font-sans">126-9 (20)</p>
                  </div>
                  <div className="flex gap-x-3">
                    <Image src="/lsg_log.jpg" className="text-lg font-serif" alt="" width={10} height={5} />
                    <span className="flex-grow">LSG</span>
                    <p className="text-xl fontbold font-sans">108 (19.5)</p>
                  </div>
                </div>
                <p>Royal Challenge banglore Won by 18r...</p>
              </div>            
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>

    <div class="bg-blue-400 shadow-2xl col-span-2 hidden p-4 sm:overflow-y-scroll sm:gap-y-4 sm:flex sm:h-[43rem] sm:flex-col">
        <div class="rounded-2xl bg-gray-100 transition ease-out duration-700 hover:bg-gray-300 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">41th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div>
        <div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">42th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div>
        <div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">42th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div>
        <div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div><div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div><div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div><div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div>
        <div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div>
        <div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div>
        <div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div>
        <div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">43th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
        </div>
        <div class="rounded-2xl bg-pink-200 p-4 h-56 min-w-full shadow-2xl ">
          <h1 class="text-lg py-2">46th Match <span>&middot;</span> Indian premier League 2023</h1>
          <div class="pt-4 pb-1 flex-col">
            <div class="flex justify-around gap-x-3 pb-3">
              <Image src="/rcb_logo.jpg" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow  text-lg font-serif">RCB</span>
              <p class="text-xl fontbold font-sans">126-9 (20)</p>
            </div>
            <div class="flex gap-x-3">
              <Image src="/lsg_log.jpg" class="text-lg font-serif" width={30} height={25}   suppressHydrationWarning alt="" />
              <span class="flex-grow">LSG</span>
              <p class="text-xl fontbold font-sans">108 (19.5)</p>
            </div>
          </div>
          <p class="">Royal Challenge banglore Won by 18r...</p>
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

  return <Matchlist  />
}



