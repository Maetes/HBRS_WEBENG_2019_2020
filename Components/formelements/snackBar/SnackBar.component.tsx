import { useState, useEffect } from 'react';
import styles from './SnackBar.module.css';
import Icon from '../../../util/frontend/iconSelector';

interface Props {
  status: boolean;
  message: string;
  type: string;
  timeout: number;
}

const SnackBar = ({ status, message, type, timeout = 3000 }: Props) => {
  const [open, setOpen] = useState(status);
  const [close, setClose] = useState(false);
  const [msg, setMsg] = useState(message);
  const [color, setColor] = useState('blue');

  const openSnackBar = () => {
    setTimeout(() => {
      setClose(true);
      setTimeout(() => {
        setOpen(false);
      }, 400);
    }, timeout);
  };

  useEffect(() => {
    switch (type) {
      case 'alert':
        setColor('red');
        break;
      case 'success':
        setColor('green');
        break;
      case 'warning':
        setColor('yellow');
        break;
      case 'info':
      default:
        setColor('blue');
        break;
    }
  }, [type]);

  useEffect(() => {
    if (open) {
      openSnackBar();
    } else {
      setOpen(false);
    }
  }, [open]);

  return (
    <div
      className={`${styles.snackbar} ${open ? styles.show : ''} ${
        close ? styles.hide : ''
      }`}
      style={{ backgroundColor: color }}
    >
      <Icon classIcon={''} count={1} destinct={type} /> {msg}
    </div>
  );
};

export default SnackBar;
