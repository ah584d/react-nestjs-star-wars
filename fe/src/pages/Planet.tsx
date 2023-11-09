import React, { ReactElement } from 'react';
import { useParams } from 'react-router';

import styles from './pages.module.css';

const Planet = (): ReactElement => {
    const { id } = useParams() ?? {};

    return <div className={styles.homeContainer}>hello {id}</div>;
};

export default Planet;
