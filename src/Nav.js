import Link from 'next/link'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const Nav = () => {
  return (
    <header>
        <nav>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/board">BOARD</Link>
        </nav>    
    </header>
  )
}
