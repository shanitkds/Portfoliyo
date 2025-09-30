import React from 'react'
import './Cart.css'

function Cart({title,img}) {
  return (
    <div className='ml-5 pb-10' data-aos="zoom-out-down cart-div">
      <div className="w-64 h-65 bg-black rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 ease-in-out overflow-hidden cart-item">
                <img
                    src={img}
                    alt="Card Image"
                    className="w-full h-40 object-cover"
                />
                <div className="p-4 cart">
                    <h2 className="text-lg font-semibold mb-2">{title}</h2>
                    <p className="text-gray-600 text-sm">
                        This is a simple card with a smooth hover effect using Tailwind CSS.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Cart
