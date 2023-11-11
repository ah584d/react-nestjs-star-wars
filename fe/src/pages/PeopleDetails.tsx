import { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router';

const PeopleDetails = (): ReactElement => {
    const { id } = useParams() ?? {};

    useEffect(() => {
        if (!id) {
            return;
        }
    }, [id]);

    return <div className={''}></div>;
};

export default PeopleDetails;
