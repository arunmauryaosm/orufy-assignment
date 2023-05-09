import React from 'react'
import { useFilterContext } from '../context/filter_context'

const Sort = () => {
  
  const {sorting} = useFilterContext();

  return (
    <div>

      <div class="dropdown">
          <form className='text-right' >
            <select className='bg-slate-300 p-2 m-2 rounded-md font-bold' name='sort' id='sort' onClick={sorting}>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </form>


      </div>

    </div>
  )
}

export default Sort
