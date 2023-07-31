import React from 'react';
import Modal from '@mui/material/Modal';
import { Box, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { Close } from '@mui/icons-material';
import styles from './Styles.module.css';

export default function BasicModal({ open, children, onClose }) {
  return (
    <Modal open={open}>
      <Box className={styles.container}>
        <div className={styles.wrappBtnClose}>
          <IconButton onClick={onClose}><Close /></IconButton>
        </div>
        <div className={styles.wrappContent}>{children}</div>
      </Box>
    </Modal>
  );
}

BasicModal.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
