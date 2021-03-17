import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ActiveLink = ({ href, children }) => {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} bg-blue-50 border-l-6 border-blue-500`
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default ActiveLink