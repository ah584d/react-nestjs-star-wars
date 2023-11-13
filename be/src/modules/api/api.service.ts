import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, lastValueFrom, map } from 'rxjs';

const NUMBER_OF_ITEMS_PER_SLICE = 10;
@Injectable()
export class ApiService {
    constructor(private http: HttpService) {}

    async getAllPersons(count: string, page: number): Promise<AxiosResponse> {
        const countNumber = +count;
        const swapiIndex = Math.ceil((countNumber * page) / NUMBER_OF_ITEMS_PER_SLICE);

        // formula given by Shay [ it works and it is shorter than mine :-) ]
        const start = (countNumber * (page - 1)) % NUMBER_OF_ITEMS_PER_SLICE;

        let startIndex1 = countNumber * page - countNumber - NUMBER_OF_ITEMS_PER_SLICE * (swapiIndex - 1);
        if (startIndex1 < 0) {
            startIndex1 += NUMBER_OF_ITEMS_PER_SLICE;
        }
        let endIndex1 = startIndex1 + countNumber;

        const startIndex2 = 0;
        let endIndex2 = 0;

        if (endIndex1 > NUMBER_OF_ITEMS_PER_SLICE) {
            endIndex2 = endIndex1 - NUMBER_OF_ITEMS_PER_SLICE;
            endIndex1 = NUMBER_OF_ITEMS_PER_SLICE;
        }

        const request1 = this.http.get(`/people?page=${swapiIndex}`).pipe(
            map((res) => res.data),
            catchError(() => {
                throw new ForbiddenException('API not available');
            }),
        );
        let payload1Promise = lastValueFrom(request1);

        let payload2Promise = undefined;
        if (endIndex2 > 0) {
            const nextSlice = swapiIndex + 1;
            const request2 = this.http.get(`/people?page=${nextSlice}`).pipe(
                map((res) => res.data),
                catchError((e) => {
                    throw new ForbiddenException('API not available');
                }),
            );
            payload2Promise = lastValueFrom(request2);
        }

        let [payload1, payload2] = await Promise.all([payload1Promise, payload2Promise]);

        console.log(
            `====> DEBUG startIndex1:`,
            startIndex1,
            'endIndex1',
            endIndex1,
            'startIndex2',
            startIndex2,
            'endIndex2',
            endIndex2,
        );

        const subset1 = payload1 ? payload1.results.slice(startIndex1, endIndex1) : undefined;
        const subset2 = payload2 ? payload2.results.slice(startIndex2, endIndex2) : undefined;
        console.log(`====> DEBUG results length: `, payload1?.results?.length, payload2?.results?.length);
        // console.log(`====> DEBUG subset1: `, subset1);
        // console.log(`====> DEBUG subset2: `, subset2);
        payload1 = {
            ...payload1,
            results: [subset1, Array.isArray(subset2) ? subset2 : undefined],
        };
        return payload1;
    }

    async getPersonById(id: number): Promise<AxiosResponse> {
        const request = this.http.get(`/people/${id}`).pipe(
            map((res) => res.data),
            catchError(() => {
                throw new ForbiddenException('API not available');
            }),
        );

        const payload = await lastValueFrom(request);

        return payload;
    }
    async getAllPlanets(): Promise<AxiosResponse> {
        const request = this.http.get(`/planets`).pipe(
            map((res) => res.data),
            catchError(() => {
                throw new ForbiddenException('API not available');
            }),
        );

        const payload = await lastValueFrom(request);

        return payload;
    }

    async getPlanetById(id: number): Promise<AxiosResponse> {
        const request = this.http.get(`/planets/${id}`).pipe(
            map((res) => res.data),
            catchError(() => {
                throw new ForbiddenException('API not available');
            }),
        );

        const payload = await lastValueFrom(request);

        return payload;
    }
}
