import React from 'react';
import { motion } from 'framer-motion';

function Contacts() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>Контакты</h2>
        <p>
          <strong>Адрес:</strong> Первомайская улица, 63, Алейск, Алтайский край, 658130
        </p>
        <p>
          <strong>Телефон:</strong> 8 (913) 253-30-30
        </p>
      </div>
    </motion.div>
  );
}

export default Contacts;
