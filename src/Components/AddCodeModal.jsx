import React from 'react'
import ModalBody from './ModalBody'
import ModalBtns from './ModalBtns'
import ModalHeader from './ModalHeader'

export default function AddCodeModal({ isModalOpen, modalType, modalTitle, addCodeEventHandler, closeModalEventHandler }) {
    return (
        <div className={`absolute justify-center items-center top-0 left-0 right-0 w-screen h-screen bg-gray-800 bg-opacity-80 ${isModalOpen ? `flex` : `hidden`}`}>
            <div className="block bg-white w-3/5 h-auto rounded-xl">
                <ModalHeader modalTitle={modalTitle} />
                <ModalBody modalType={modalType} />
                <ModalBtns addCodeEventHandler={addCodeEventHandler} closeModalEventHandler={closeModalEventHandler}/>
            </div>
        </div>
    )
}