import { FC } from 'react';
import { People } from '../../types/common .types';
import { Card } from '../card/Card';
import styles from './listing.module.css';

interface ListingProps {
    list: People[];
}
//         <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

export const Listing: FC<ListingProps> = ({ list }) => {
    return (
        <div className={styles.flexContainer}>
            {list?.map((item, index) => (
                <div className={styles.flexItem}>
                    <Card {...item} key={`${item?.name}${index}`} />
                </div>
            ))}
        </div>
    );
};
