import React from 'react';
import styles from './styles.scss';

export const ButtonExample = ({children, text, onClick}) => {
console.log(styles);

    return <button 
                class={styles.wrapper}
                onClick={onClick}
            >
                {children}
            </button>;
}