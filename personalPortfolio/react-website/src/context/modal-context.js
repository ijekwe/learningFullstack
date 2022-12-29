import {createContext, useContext, useState} from 'react'

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [showModal, setshowModal] = useState(false);

    const showModalHandler = () => {
      setshowModal(true);
    }

    const closeModalHandler = () => {
      setshowModal(false)
    }
 
    return <ModalContext.Provider value={{showModal, showModalHandler, closeModalHandler}}>{children} </ModalContext.Provider>
} 

 // custom hook to consumer the modal context anywhere in project

 export const useModalContext = () => {
    return useContext(ModalContext);
 }