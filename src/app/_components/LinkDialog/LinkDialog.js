import React from 'react';

const LinkDialog = ({ link, onClose,handleClick }) => {
  return (
    <div style={styles.overlay} className='search-box'>
      <div style={styles.dialog} className='bg-gray-200'>
        <h3 className='text-gray-800 text-start font-semibold text-lg mb-2'>Play to Copied Link?</h3>
        <p className='text-black break-words'>{link}</p>
        <div style={styles.buttons}>
       
          <button style={styles.closeButton} onClick={onClose}>
            Close
          </button>
          <button style={styles.navigateButton}
          onClick={()=>handleClick(link)}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  dialog: {
    // backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '80%',
  },
  buttons: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  navigateButton: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  closeButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LinkDialog;
