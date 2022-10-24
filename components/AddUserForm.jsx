import React from 'react'
import { BiPlus } from 'react-icons/bi'

const AddUserForm = () => {
  return (
    <form className="grid lg:grid-cols-4 w-full gap-4 " >
            <div className="input-type">
                <input type="text"   name="employee_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="ID" />
                
            </div>
            <div className="input-type">
                <input type="text"   name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
            </div>
            <div className="input-type">
                <input type="text"   name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input type="date"   name="hire_date" className="border px-5 py-3 focus:outline-none rounded-md w-full" placeholder="Commencement Date" />
            </div>
            <div className="input-type">
                <input type="text"   name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
            </div>
            <div className="input-type">
                <input type="text"   name="phone_number" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Phone" />
            </div>
            <div className="input-type">
                <input type="number"   name="job_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Job ID" />
            </div>
            
            
            <div className="input-type">
                <input type="text"   name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
            </div>
            <div className="input-type">
                <input type="number"   name="commission_percent" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Commission %" />
            </div>
            <div className="input-type">
                <input type="number"   name="department_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Department ID" />
            </div>
            <div className="input-type">
                <input type="number"   name="manager_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Manager ID" />
            </div>
            
            


            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio"  value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio"   value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
             Add <span className="px-1"><BiPlus size={24}></BiPlus></span>
            </button>

           </form> 
  )
}

export default AddUserForm