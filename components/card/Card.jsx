import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './card.module.css';
import cls from 'classnames';

const imgPlaceholderUrl =
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80';

export default function Card(props) {
  const { imgUrl = imgPlaceholderUrl, size = 'medium' } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleImgError = () => {
    setImgSrc(imgPlaceholderUrl);
  };
  const sizeClasses = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(sizeClasses[size], styles.imgMotionWrapper)}
        whileHover={{ scaleY: 1.1 }}
      >
        <Image
          src={imgSrc}
          layout="fill"
          className={styles.cardImg}
          onError={handleImgError}
        />
      </motion.div>
    </div>
  );
}
