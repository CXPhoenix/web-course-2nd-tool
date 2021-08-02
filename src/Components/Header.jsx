import React from 'react'

export default function Header({ courseTitle }) {
    return (
        <header className={`w-full p-3 bg-blue-700 text-center`}>
            <span className={`text-[4vw] text-gray-100`}>{ courseTitle }</span>
        </header>
    )
}