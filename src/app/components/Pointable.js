import React from "react";

const Pointable = ({pointable}) => {
  return (
    <>
      <div>
        <div class="flex flex-col">
            <div class="min-w-full py-2 px-4 lg:px-10">
                <table class="min-w-full text-center text-sm font-light">
                  <thead class="border-b font-medium shadow-xl bg-gray-400 dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-4 py-4">
                      Teams	
                      </th>
                      <th scope="col" class="px-4 py-4">
                      Won
                      </th>
                      <th scope="col" class="px-4 py-4">
                      Lost	
                      </th>
                      <th scope="col" class="px-4 py-4">
                      Tied	
                      </th>
                      <th scope="col" class="px-4 py-4">
                      Pts
                      </th>
                      <th scope="col" class="px-4 py-4">
                      NRR
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    pointable.map((currele, index)=>
                    {
                      const shorteamname= currele.Teams.split(" ").map((str)=>str.charAt(0)).join("");

                      return (
                        <tr key={index} class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-4 lg:px-6 py-4 font-medium">{shorteamname}</td>
                        <td class="whitespace-nowrap px-4 lg:px-6 py-4">{currele.Mat}</td>
                        <td class="whitespace-nowrap px-4 lg:px-6 py-4">{currele.Won}</td>
                        <td class="whitespace-nowrap px-4 lg:px-6 py-4">{currele.Lost}</td>
                        <td class="whitespace-nowrap px-4 lg:px-6 py-4">{currele.Tied}</td>
                        <td class="whitespace-nowrap px-4 lg:px-6 pt-4">{currele.NRR}</td>
                        </tr>
                        )
                      
                    })
                  }
                    
                  </tbody>
                </table>
              
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Pointable;
