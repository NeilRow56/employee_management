import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Menu } from '@headlessui/react'

import Cookies from 'js-cookie';
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import DropdownMenu from './DropdownMenu';


const Navbar1 = () => {
  
  

  const { status, data: session } = useSession();

    const router = useRouter();

    const logoutClickHandler = () => {
      
      signOut({ callbackUrl: '/signin' });
    };

  return (
     <>
    <ToastContainer position="bottom-center" limit={1} />
    <nav className="flex h-12 items-center px-4 justify-between shadow-md mb-5">
            <Link href="/">
              <a className={router.pathname == '/' ? "active " : "not_active" }  > Employee Management</a>
               </Link>
            <div className='flex items-center'>
                <div className='flex items-center px-2 py-1'>
                
              
              <FaSignInAlt className='text-green-500' />
              
              
              </div>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
            <DropdownMenu />
                
                
              ) : (
                <Link href="/signin">
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
          </>
  )
}

export default Navbar1