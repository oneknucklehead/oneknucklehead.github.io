import React from 'react'
import { Button, Image } from './BMCButtonElements'

const BMCButton = () => {
  return (
    <Button target='_blank' href='https://www.buymeacoffee.com/ZohebAhmed'>
      <Image
        src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
        alt='Buy me a coffee'
      />
    </Button>
  )
}

export default BMCButton
