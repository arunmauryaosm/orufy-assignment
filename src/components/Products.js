import React from 'react'
import { BsCurrencyRupee, BsStarFill, BsStarHalf } from 'react-icons/bs'

const Products = (curElem) => {

    const {name, image, company, price} = curElem

    return (
        <div>
            <div className='m-2  border-solid bg-slate-100 border-2 rounded-md flex-col w-52'>
                <img className='border-solid p-2  bg-slate-200 ' src={image} width={300} height={300} alt='' />
                <div className='m-2 mt-3'>
                    <p className='font-bold text-xl'>{name}</p>
                    <p className='text-sm font-medium mt-1'>{company}</p>
                    <p className='flex mt-2'><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /></p>
                    <p className='flex text-2xl mt-3'> <BsCurrencyRupee className='mt-2' size={21} /> {price}</p>
                    <button className='bg-blue-300 rounded-md px-2 py-1 font-bold mt-2'> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Products
