import Head from "next/head"
import { useState } from 'react'
import { BiUserPlus } from "react-icons/bi";
import Form from "../components/Form";
import Table from "../components/Table";


const Home = () => {
  const [ visible, setVisible ] = useState( false )

  const handler = () => {
    setVisible( !visible  )
  }

  return (
    
      <section>
        <Head>
        <title>Home Page</title>
    </Head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center py-10 font-bold" >Employee Management</h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex-gap-3">
            <button onClick={handler} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:border-2 hover:text-gray-800 flex items-center  ">Add Employee <span className=" px-1 items-center"><BiUserPlus className="h-6 w-6" /></span>  </button>
          </div>   

        </div> 

        {/* Collapsible Form */}
        
          { visible ? <Form />: <></> }
           
        
         
        {/* Table */}
        <div className="container mx-auto">
          <Table />
        </div>
          
      </main>
        
      </section>
      
      
    
  )
}

export default Home

