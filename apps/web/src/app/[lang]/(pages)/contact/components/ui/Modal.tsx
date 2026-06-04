import { AnimatePresence, motion } from 'motion/react';
import { FC } from 'react';

import Button from '@/shared/ui/button/Button';

import styles from '../Form.module.scss';

type ModalProps = { isModalOpen: boolean; onCloseModal: () => void };

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Modal: FC<ModalProps> = ({ isModalOpen, onCloseModal }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          animate="visible"
          className={styles.backdrop}
          exit="hidden"
          initial="hidden"
          onClick={onCloseModal}
          variants={backdropVariants}
        >
          <motion.div
            animate="visible"
            className={styles.modal}
            exit="hidden"
            initial="hidden"
            onClick={(e) => e.stopPropagation()}
            transition={{ damping: 30, stiffness: 400, type: 'spring' }}
            variants={modalVariants}
          >
            <h2 className={styles.title}>Message sent!</h2>
            <Button
              className={styles.closeBtn}
              onClick={onCloseModal}
              variant="primary"
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
