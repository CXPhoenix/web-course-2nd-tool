import React from 'react'

export default function Header({ courseTitle }) {
    return (
        <header className={`w-full p-2 bg-blue-700 text-center`}>
            <span className={`text-[3vw] text-gray-100`}>{ courseTitle }</span>
        </header>
    )
}