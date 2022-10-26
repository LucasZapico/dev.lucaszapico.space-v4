import React, { memo } from 'react'
import Nav from './nav/nav'

const MemoNav = Nav

const Header = () => {
  return (
    <header>
      <MemoNav />
    </header>
  )
}

export default Header
