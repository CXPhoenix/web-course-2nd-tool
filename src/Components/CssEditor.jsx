import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import CssEditArea from './CssEditArea';
import EditBtns from './EditBtns';

export default function CssEditor({ editorId, isActive, cssData, openAddCodeAreaEventHandler, downloadCssFileEventHandler, deleteCssCodeEventHandler, changeCssCodeEventHandler }) {

    function onDragEnd(result) {
        if (result.destination.droppableId === 'Trash') {
            deleteCssCodeEventHandler(result.source)
            return
        }
        if (result.destination.index === result.source.index) {
            return
        }
        if (!result.destination) {
            return 
        }
        changeCssCodeEventHandler(result.source, result.destination)
    }
    return (
        <div className={`w-full h-full overflow-scroll px-1 pt-4 ${isActive ? `` : `hidden`}`} id={editorId}>
            <DragDropContext onDragEnd={onDragEnd}>
                <EditBtns openAddCodeAreaEventHandler={openAddCodeAreaEventHandler} downloadFileHandler={downloadCssFileEventHandler} />
                <div className="h-[2vh]"></div>
                <CssEditArea cssContents={cssData} editorId={editorId} />
            </DragDropContext>
            <div className={`h-[10vh]`}></div>
        </div>
    )
}