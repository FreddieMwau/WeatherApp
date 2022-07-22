import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {
            id:1,
            title: 'Mombasa'
        },
        {
            id: 2,
            title: 'Nairobi'
        },
        {
            id: 3,
            title: 'Nakuru'
        },
        {
            id: 4,
            title: 'Nyeri'
        },
        {
            id: 5,
            title: 'Kisumu'
        }


    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} onClick={() => setQuery({q: city.title})} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons