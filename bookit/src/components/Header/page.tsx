/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link"
import React from "react"
import { useState } from 'react'
import Image from 'next/image';
import { Dialog, Popover} from '@headlessui/react'
import { signOut } from "next-auth/react";
import logo from '@/app/images/logo.png'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

type Props = {
  currentUser?: any;
} 

const Header: React.FC<Props> = ( { currentUser }) => {

  const isHost = (currentUser?.userType === 'Host') ? true : false

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <div>
      <header>
        <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">BookIT</span>
              <Image src={logo} alt="logo" className="h-30 w-20"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 hover:underline">
            Home
          </a>
          <a href="/" className="text-sm font-semibold leading-6 hover:underline">
            Hotels
          </a>
          <a href="/" className="text-sm font-semibold leading-6 hover:underline">
            About
          </a>
          {isHost && (
            <Link href={`/newlisting/${currentUser?.id}`} className="text-sm font-semibold leading-6 hover:underline">
            Create a listing
            </Link>
          )}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {currentUser ? (
            <>
            <div className="p-2 font-semibold tracking-tight bg-primary hover:bg-secondary uppercase"> 
            Hello {currentUser?.name} 
            </div>
            &nbsp;
            <div onClick={() => signOut()} className="p-2 inline-block font-semibold tracking-tight bg-secondary hover:bg-primary">
                Sign out
            </div>
            </>
          ) : (
            <div>
                <a href="/auth/login" className="px-3 py-2 font-semibold tracking-tight bg-primary hover:bg-secondary">
                    Log in
                </a>
                &nbsp;
                <a href="/auth/register" className="px-3 py-2 font-semibold tracking-tight bg-secondary hover:bg-primary">
                    Sign Up
                </a>
    
            </div>
          )}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">BookIT</span>
              <Image src={logo} alt="logo" className="h-30 w-20" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6">
                <a href="/" className="text-sm font-semibold hover:underline">
                  Home
                </a>
                <br />
                <a href="/" className="text-sm font-semibold hover:underline">
                  Hotels
                </a>
                <br />
                <a href="/" className="text-sm font-semibold hover:underline">
                  About
                </a>
                <br />
              </div>
              <div className="py-6">
                <div>
                  <a href="/auth/login" className="px-3 py-2 font-semibold tracking-tight  bg-primary hover:bg-secondary">
                    Log in
                  </a>
                  &nbsp;
                  <a href="/auth/register" className="px-3 py-2 font-semibold tracking-tight  bg-secondary hover:bg-primary">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      </header>
      </div>
    )
  }
  
  export default Header;