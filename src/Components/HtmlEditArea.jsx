import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import CodeSpan from './CodeSpan'

export default function HtmlEditArea({ htmlContents }) {
    return (
        <div className={`block mb-[15vh]`}>
            <Droppable droppableId={`HTMLCodeArea`}>
                {(provided, snapshot) => (
                    <div className="" ref={provided.innerRef} {...provided.droppableProps}>
                        {
                            htmlContents.map((item, index) => (
                                <CodeSpan key={`HtmlCode${index}`} index={index} codeText={item} codeId={`HtmlCode${index}`} />
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}