import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { useReducer } from 'react'

const formReducer = ( state, event ) => {
     return {
        ...state,
        [event.target.name]:event.target.value
    }
}


const Form = () => {

const [formData, setFormData] = useReducer(formReducer, {})

 const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
 }
  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-4 w-full gap-4 mt-5 " >
            <div className="input-type">
                <input type="text" onChange={setFormData}  name="employee_id" className= "border px-5 py-3 focus:outline-none rounded-md w-full"placeholder="ID" />                
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="firstname" className="border px-5 py-3 focus:outline-none rounded-md w-full" placeholder="First Name" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData}  name="hire_date" className="border px-5 py-3 focus:outline-none rounded-md w-full" placeholder="Commencement Date" />
            </div>
            <div className="input-tonChange={setFormData}ppe">
                <input type="text" onChange={setFormData} name="email" className="border px-5 py-3 focus:outline-none rounded-md w-full" placeholder="Email" />
            </div>
            <div className="input-tonChange={setFormData}ppe">
                <input type="text" onChange={setFormData} name="phone_number" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Phone" />
            </div>
            <div className="input-type">
                <input type="text"  onChange={setFormData}  name="job_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Job ID" />
            </div>
            
            
            <div className="input-type">
                <input type="text" onChange={setFormData}  name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
            </div>
            <div className="input-type">
                <input type="text"   onChange={setFormData}name="commission_percent" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Commission %" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData}  name="department_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Department ID" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData}  name="manager_id" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Manager ID" />
            </div>
            
            


            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio"  onChange={setFormData} value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                        Inactive
                    </label>
                </div>
            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500 mb-3">
             Add <span className="px-1"><BiPlus size={24}></BiPlus></span>
            </button>

           </form> 
  )
}

export default Form