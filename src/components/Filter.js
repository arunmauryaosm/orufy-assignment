import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useProductContext } from '../context/productContext'
import { useFilterContext } from '../context/filter_context';

const Filter = () => {

    const { products } = useProductContext();


    const {
        filters: { text, category, color },
        updateFilterValue,
        all_products,
      } = useFilterContext();

    // get data each

    const getUniqueData = (data, property) => {
        let newVal = data.map((curElem) => {
            return curElem[property];
        })
        return( newVal = [ "ALL", ...new Set(newVal)])
    }
    const getData = (data, property) => {
        let newVal = data.map((curElem) => {
            return curElem[property];
        })
        return( newVal = [  ...new Set(newVal)])
    }



    // get unique data

    const categoryOnlyData = getUniqueData(all_products, "category");
    const companyOnlyData = getData(all_products, "company");


    return (
        <div>

            <div >
                <span className='flex justify-between '>
                    <h2 className='m-2 mt-2 text-2xl font-normal'>Filter </h2>
                    <p className='m-2 mt-3 '><GiHamburgerMenu size={30} /></p>
                </span>
                <hr />

                <h2 className='m-3 text-xl'>Brand</h2>

                {companyOnlyData.map((curElem, index) => {
                    return (
                        <div class="flex items-center mb-4 m-4">
                        <input key={index} type='checkbox' value={curElem} name='company' onClick={updateFilterValue} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-black dark:text-gray-900">{curElem}</label>
                    </div>                     
                    )
                })}

                <h2 className='m-3 text-xl'>Category</h2>

                {categoryOnlyData.map((curElem, index) => {
                    return (
                        <div class="flex items-center mb-4 m-4">
                            <input key={index} type='checkbox' value={curElem} name='category' onClick={updateFilterValue} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-black dark:text-gray-900">{curElem}</label>
                        </div>
                    )
                })}




            </div>

        </div>
    )
}

export default Filter
