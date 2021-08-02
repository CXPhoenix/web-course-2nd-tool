import React from 'react'



export default function EditorTags({ tagContent, tagId, clickEventHandler, isActive }) {
    return (
        <button className={`tag py-2 px-1 mx-2 text-gray-50 focus:outline-none border-green-400 ${isActive ? "border-t-4" : ""}`} onClick={clickEventHandler} id={tagId}>{ tagContent }</button>
    )
}