import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={54} height={54} priorityalt=""/>
        </Link>
    </div>
  )
}

export default Logo
