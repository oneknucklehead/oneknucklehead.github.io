import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { ScrollToTop, Icon } from './ToTopButtonElements'
import { BsChevronUp } from 'react-icons/bs'
const ToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [visible, setVisibility] = useState(false)

  useEffect(() => {
    if (pageYOffset > 80) {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  }, [pageYOffset])

  if (!visible) {
    return false
  }
  return (
    <ScrollToTop to='about' smooth={true} duration={100} offset={-300}>
      <Icon>
        <BsChevronUp />
      </Icon>
    </ScrollToTop>
  )
}

export default ToTopButton
