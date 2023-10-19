'use client'
import { Button, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import React, { useState } from 'react'
 

 
const Searchbar = () => {
 
    return (
      <div className='flex max-w-xl space-x-4'>
      <TextFieldRoot>
                <TextFieldInput placeholder='Search movie....'>
                 
         </TextFieldInput>

            </TextFieldRoot>
            <div>
                <Button>
                    Search
                </Button>
         
            </div>

        
            </div>
  )
}

export default Searchbar
