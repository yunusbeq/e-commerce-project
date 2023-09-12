import React from 'react'

const CartComp = ({cart}) => {
  return (
    <div className='my-5'>
      <img className='w-[150px] px h-[150px] object-cover ' src={cart?.image} alt=''/>
      <div>
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div>{cart?.price} TL</div>
      <div className='bg-red-500 text-white w-[200px] h-16 flex items-center justify-center'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp