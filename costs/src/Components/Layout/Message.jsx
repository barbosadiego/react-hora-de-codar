import React from 'react';
import styles from './Message.css';

const Message = ({ type, msg }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <React.Fragment>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </React.Fragment>
  );
};

export default Message;
