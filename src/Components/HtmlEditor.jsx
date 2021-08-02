import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import HtmlEditArea from './HtmlEditArea';
import EditBtns from './EditBtns';

export default function HtmlEditor({ editorId, isActive, htmlData, openAddCodeAreaEventHandler, downloadHtmlFileEventHandler, deleteHtmlCodeEventHandler, changeHtmlCodeEventHandler }) {

    function onDragEnd(result) {
        if (result.destination.droppableId === 'Trash') {
            deleteHtmlCodeEventHandler(result.source)
            return
        }
        if (result.destination.index === result.source.index) {
            return
        }
        if (!result.destination) {
            return 
        }
        changeHtmlCodeEventHandler(result.source, result.destination)
    }
    return (
        <div className={`w-full h-full overflow-scroll px-1 pt-4 ${isActive ? `` : `hidden`}`} id={editorId}>
            <DragDropContext onDragEnd={onDragEnd}>
                <EditBtns openAddCodeAreaEventHandler={openAddCodeAreaEventHandler} downloadFileHandler={downloadHtmlFileEventHandler} />
                <div className="h-[2vh]"></div>
                <HtmlEditArea htmlContents={htmlData} editorId={editorId} />
            </DragDropContext>
            <div className={`h-[10vh]`}></div>
        </div>
    )
}