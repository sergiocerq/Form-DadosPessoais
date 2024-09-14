"use client"

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { UserForm } from './userForm';

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <UserForm />
    </div>
  )
}