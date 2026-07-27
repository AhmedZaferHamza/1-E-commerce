'use client'
import React from 'react'

export default function AddToCartBtn() {
  return (
    <button 
      onClick={() => console.log('Added to cart')}
      className="bg-[#2C4CFD] text-white py-2 px-4 rounded-md hover:bg-[#1a3ae0] cursor-pointer transition-colors duration-300 max-w-[440px] mt-4"
    >
      Add to cart
    </button>
  )
}