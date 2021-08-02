import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import CodeSpan from './CodeSpan'

export default function HtmlEditArea({ htmlContents }) {
    return (
        <div className={`block overflow-scroll`}>
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
            <div className="h-[15vh]"></div>
        </div>
    )
}