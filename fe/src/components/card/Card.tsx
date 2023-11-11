import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { People } from '../../types/common .types';
import styles from './card.module.css';
import defaultImage from '/avatar.avif';
import { getUrlId } from '../../services/utils/extra.utils';

export interface CardProps extends People {}

export const Card: FC<CardProps> = ({ name, birth_year, url }) => {
    const navigate = useNavigate();
    const id = getUrlId(url);

    const onButtonCLicked = (): void => {
        navigate(`/people/${id}`, { replace: true });
    };

    const avatarUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

    return (
        <div
            className={`max-w-sm rounded overflow-hidden shadow-lg m-4 transform hover:scale-105 transition-transform duration-300`}
        >
            <img className={`${styles.image} w-full`} src={avatarUrl ? avatarUrl : defaultImage} alt="avatar" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-start">{name}</div>
                <p className="text-gray-700 text-base text-start">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et
                    perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span
                    className={`active:bg-blue-700 hover:bg-blue-600 cursor-pointer bg-green-500 inline-block shadow-lg rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}
                    onClick={onButtonCLicked}
                >
                    Details
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {birth_year}
                </span>
            </div>
        </div>
    );
};
