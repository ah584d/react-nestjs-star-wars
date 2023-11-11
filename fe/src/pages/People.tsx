import React, { ReactElement, useEffect, useState } from 'react';
import { Listing } from '../components/list/Listing';
import { getAllPeople } from '../services/api.service';
import { PeoplePayload } from '../types/common .types';
import styles from './pages.module.css';

const People = (): ReactElement => {
    const [people, setPeople] = useState<PeoplePayload>();

    const initState = async () => {
        const result = await getAllPeople();
        if (result[1]) {
            setPeople(result[1]);
        }
    };

    useEffect(() => {
        initState();
    }, []);

    return (
        <div className={styles.homeContainer}>
            <h2>{people?.count} People(s)</h2>
            <div>
                {' '}
                <Listing list={people?.results ?? []} />
            </div>
        </div>
    );
};

export default People;
