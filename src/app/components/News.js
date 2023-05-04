import Image from 'next/image'
import React from 'react'

const News = () => {
  return (
    <>
          <div className="sm:flex sm:flex-col sm:col-span-3 lg:col-span-2 lg:grid-cols-none lg:h-[40rem] lg:overflow-y-hidden  flex-cols bg-red">
      <div className="text-4xl bg-gray-300 font-extrabold font-serif text-center">News</div>
        <div className="grid grid-cols-1 gap-y-3">
          <div className="flex p-4 gap-x-2 ">
            <Image src="/news_vk.jpg" alt="" className="sm:h-40 sm:object-fill" suppressHydrationWarning height={500} width={500} />
            <div className="gap-y-2 ">
              <h1 className="text-xl font-bold">Kohli vs Gambhir - A feud reignited?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima magni quidem veniam voluptatem fugiat ea !</p>
            </div>
          </div>
          <div className="flex p-4 gap-x-2 ">
            <Image src="/news_vk.jpg" alt="" className="sm:h-40 sm:object-fill" suppressHydrationWarning height={500} width={500} />
            <div className="gap-y-2 ">
              <h1 className="text-xl font-bold">Kohli vs Gambhir - A feud reignited?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima magni quidem veniam voluptatem fugiat ea !</p>
            </div>
          </div>
          <div className="flex p-4 gap-x-2 ">
            <Image src="/news_vk.jpg" alt="" className="sm:h-40 sm:object-fill" suppressHydrationWarning height={500} width={500} />
            <div className="gap-y-2 ">
              <h1 className="text-xl font-bold">Kohli vs Gambhir - A feud reignited?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima magni quidem veniam voluptatem fugiat ea !</p>
            </div>
          </div>
          <div className="flex p-4 gap-x-2 ">
            <Image src="/news_vk.jpg" alt="" className="sm:h-40 sm:object-fill" suppressHydrationWarning height={500} width={500} />
            <div className="gap-y-2 ">
              <h1 className="text-xl font-bold">Kohli vs Gambhir - A feud reignited?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima magni quidem veniam voluptatem fugiat ea !</p>
            </div>
          </div>
          <div className="flex p-4 gap-x-2 ">
            <Image src="/news_vk.jpg" alt="" className="sm:h-40 sm:object-fill" suppressHydrationWarning height={500} width={500} />
            <div className="gap-y-2 ">
              <h1 className="text-xl font-bold">Kohli vs Gambhir - A feud reignited?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima magni quidem veniam voluptatem fugiat ea !</p>
            </div>
          </div>
          <div className="flex p-4 gap-x-2 ">
            <Image src="/news_vk.jpg" alt="" className="sm:h-40 sm:object-fill" suppressHydrationWarning height={500} width={500} />
            <div className="gap-y-2 ">
              <h1 className="text-xl font-bold">Kohli vs Gambhir - A feud reignited?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima magni quidem veniam voluptatem fugiat ea !</p>
            </div>
          </div>
          

        </div>
        
      </div>
    </>
  )
}

export default News
