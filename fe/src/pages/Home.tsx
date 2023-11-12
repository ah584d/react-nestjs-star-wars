import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEggStore } from '../store/store';
import styles from './pages.module.css';

export const Home = (): ReactElement => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <input
                className="active:bg-blue-700 hover:bg-blue-600 cursor-pointer bg-green-500"
                type="button"
                onClick={() => navigate(`/people`, { replace: true })}
                value={'People'}
            />
            <input
                className="active:bg-blue-700 hover:bg-blue-600 cursor-pointer bg-green-500"
                type="button"
                onClick={() => navigate(`/planets`, { replace: true })}
                value={'Planets'}
            />
        </div>
    );
};
