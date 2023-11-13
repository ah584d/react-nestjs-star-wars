import { ROUTES } from '../common/const/apiRoutes';
import { People, PeoplePayload } from '../types/common .types';
import { ApiResponse } from '../types/http.types';
import { networkManager } from './network.service';

export const getAllPeople = async (): Promise<ApiResponse<PeoplePayload>> => {
    try {
        const url = `${ROUTES.ENTITIES.PEOPLE}?count=10&page=1`;
        const { data } = await networkManager.get<PeoplePayload>(url);
        return [null, data];
    } catch (error) {
        const errorSentence = `Error occurred while trying to get all people: ${error}`;
        console.warn(errorSentence);
        return [new Error(errorSentence), null];
    }
};

export const getPeopleById = async (id: string): Promise<ApiResponse<People>> => {
    try {
        const url = `${ROUTES.ENTITIES.PEOPLE}/${id}`;
        const { data } = await networkManager.get<People>(url);
        return [null, data];
    } catch (error) {
        const errorSentence = `Error occurred while trying to get people by user Id ${id}: ${error}`;
        console.warn(errorSentence);
        return [new Error(errorSentence), null];
    }
};

