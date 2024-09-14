"use client"

import React from 'react';
import { UserForm } from './UserForm';
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Toaster position="top-right"/>
      <UserForm />
    </div>
  )
}