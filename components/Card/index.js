import React, { useState } from 'react'
import Image from 'next/image'

const index = () => {


  const [producto, setProducto] = useState([{
    nombre: 'Cafe',
    categoria: 'bebestibles',
    precio: '$3.000',
    detalle: 'Un muy rico cafe caliente para la mañana'
  },
  {
    nombre: 'Te',
    categoria: 'bebestibles',
    precio: '$2.000',
    detalle: 'Un muy rico cafe caliente para la mañana'
  },
  {
    nombre: 'Leche con chocolate',
    categoria: 'bebestibles',
    precio: '$1.000',
    detalle: 'Un muy rico cafe caliente para la mañana'
  }
  ])

  return (
    <>
      {producto.map((p) => {
        
        <div className='bg-gray-200'>
          <h1>HOLA</h1>

        </div>
      })}
    </>
  )
}

export default index



{/* <div className="w-6/6 p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className='flex flex-row'>
            <Image src='/assets/cafe.jpg' width={150} height={150} alt="" />
            <div className='m-3'>
              <h1 className='text-2xl font-bold '>{productos.nombre}</h1>
              <p className="font-normal text-gray-700 dark:text-gray-400 flex flex-row">{productos.detalle}</p>
              <h1 className='font-bold'>{productos.precio}</h1>
            </div>
          </div>
        </div> */}