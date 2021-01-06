import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../Modal'

const ModalServiceContext = React.createContext(Promise.reject)

const ModalServiceProvider = ({ children }) => {
  const [modalState, setModalState] = React.useState(null)

  const awaitingPromiseRef = React.useRef()

  const openModal = options => {
    setModalState(options)
    return new Promise((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject }
    })
  }

  const handleClose = () => {
    if (modalState.catchOnCancel && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject()
    }

    setModalState(null)
  }

  const handleSubmit = () => {
    setModalState(null)
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve()
    }
  }

  const handleBackdropPress = () => {
    if (modalState.dismissOnBackdropPress) {
      setModalState(null)
    }
  }

  return (
    <>
      <ModalServiceContext.Provider children={children} value={{ openModal }} />

      {Boolean(modalState) && (
        <Modal
          acceptButtonOnPress={handleSubmit}
          acceptButtonText={modalState && modalState.acceptButtonText}
          cancelButtonOnPress={handleClose}
          cancelButtonText={modalState && modalState.cancelButtonText}
          isVisible
          onBackdropPress={handleBackdropPress}
          text={modalState && modalState.text}
          title={modalState && modalState.title}
          {...modalState}
        />
      )}
    </>
  )
}

ModalServiceProvider.propTypes = {
  children: PropTypes.element
}

export { ModalServiceContext, ModalServiceProvider }
