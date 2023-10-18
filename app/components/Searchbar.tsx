
import { TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'

const Searchbar = () => {
  return (
      <TextFieldRoot>
          <TextFieldInput placeholder='Search movie....'>
         </TextFieldInput>
  <MagnifyingGlassIcon className='h-10 w-10 mr-2'/>

    </TextFieldRoot>
  )
}

export default Searchbar
