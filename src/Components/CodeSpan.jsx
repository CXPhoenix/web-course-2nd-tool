import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function CodeSpan({ codeText, codeId, index }) {
    return (
        <Draggable draggableId={codeId} index={index}>
            {(porvided, snapshot) => (
                <div 
                ref={porvided.innerRef}
                {...porvided.draggableProps}
                {...porvided.dragHandleProps}
                className={`w-full my-3 py-1 pl-4 border-[2px] border-gray-400 rounded-3xl text-gray-50 ${snapshot.isDragging ? `select-none` : ``} ${snapshot.isDragging ? `opacity-40` : ``}`}
                >
                    {codeText}
                </div>
            )}
        </Draggable>
    )
}