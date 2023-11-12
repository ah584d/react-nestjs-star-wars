import { ReactElement, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Listing } from '../components/list/Listing';
import { getAllPeople } from '../services/api.service';
import { useEggStore } from '../store/store';
import { PeoplePayload } from '../types/common .types';
import styles from './pages.module.css';

const People = (): ReactElement => {
    const [people, setPeople] = useState<PeoplePayload>();

    const { isLoading, setIsLoading } = useEggStore((state) => state) ?? {};

    const initState = async () => {
        setIsLoading(true);
        const result = await getAllPeople();
        if (result[1]) {
            setPeople(result[1]);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        initState();
    }, []);

    return (
        <div className={styles.homeContainer}>
            {isLoading ? (
                <TailSpin color="red" radius={'8px'} />
            ) : (
                <>
                    <h2>{people?.count} People(s)</h2>
                    <div>
                        {' '}
                        <Listing list={people?.results ?? []} />
                    </div>
                </>
            )}
        </div>
    );
};

export default People;
