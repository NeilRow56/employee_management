import React from 'react'
import { BiTrashAlt, BiEdit } from 'react-icons/bi'
import data from '../database/data.json'

const Table = () => {
  return (
    <table className='min-w-full table-auto'>
        <thead>
            <tr className='bg-gray-800'>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Name</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Email</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Salary</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200 '>Start Date</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Status</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Actions</span>
                </th>
            </tr>
        </thead>
        <tbody className='bg-gray-200'>
            {
                data.map((obj, index) => <Tr {...obj} key={index} />)
            }

        </tbody>
    </table>
  )
}

export default Table

function Tr ({ id, name, avatar, email, salary, date, status}) {

    return(
        <tr className='bg-gray-50 '>
                <td className='px-12 py-2 flex flex-row items-center'>
                    <img src={avatar || '#'} alt="" />
                    <span className='text-center ml-2 font-semibold'>
                        {name || "unknown"}
                    </span>
                </td>
                <td className='px-16 py-2'>
                    <span>{email || "unknown"}</span>
                </td>
                <td className='px-16 py-2'>
                    <span>{salary || "unknown"}</span>
                </td>
                <td className='px-12 py-2'>
                    <span>{date || "unknown"}</span>
                </td>
                <td className='px-16 py-2'>
                    <button className='cursor '><span className='bg-green-500 text-white px-5 py-1 rounded-full'>{status || "unknown"}</span></button>
                </td>
                <td className='px-10 py-2 '>              
                    <button   className="cursor mr-3 "><BiEdit size={25} color={"rgb(34,197,94)"} className='mt-2' />
                    </button>
                        <button className="cursor "><BiTrashAlt size={25} color={"rgb(244,63,94)"} className='mt-2'/>
                        </button>        
            </td>
            </tr>

    )

}