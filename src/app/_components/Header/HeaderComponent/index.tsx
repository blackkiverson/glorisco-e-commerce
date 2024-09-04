"use client";

import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'
// import MobileNav from '../MobileNav'

import classes from './index.module.scss'
import { notHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

const HeaderComponent = ({ header }: { header: Header }) => {
    const pathname = usePathname()

    return (
        <nav className={[classes.header, notHeaderFooterUrls.includes
            (pathname) && classes.hide].filter(Boolean).join(' ')}>
            <Gutter className={classes.wrap}>
                <Link href='/'>
                    {/* header logo */}
                    <img src="/logo-white.svg" alt='logo' width={170} height={50} />
                </Link>

                <HeaderNav header={header} />
                {/* <MobileNav header={header} /> */}
            </Gutter>
        </nav>
    )
}

export default HeaderComponent