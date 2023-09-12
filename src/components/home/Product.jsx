import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {

    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='w-[400 px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer'>
        <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span className='text-sm'>TL</span></div>
        <img src={product?.image} className='w-[20 px] h-[20 px] object-cover m-auto'  alt=""></img>
        <div className='text-center px-3 mt-3 text-xl font-bold'>{product?.title}</div>

    </div>
  )
}

export default Product