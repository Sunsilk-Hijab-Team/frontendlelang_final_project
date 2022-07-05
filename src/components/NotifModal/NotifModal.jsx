import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

const modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  transform: 'translate(-50%, -50%)',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function NotifModal({ open, children, onClose }) {

  if (!open) return null

  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <div style={modalStyles}>
      <button onClick={onClose}>Close Modal</button>
      {children}
    </div>
  );
}

export default NotifModal;