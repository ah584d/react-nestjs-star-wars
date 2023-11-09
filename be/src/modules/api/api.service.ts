import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private http: HttpService) {}

    async getAllPersons(): Promise<AxiosResponse> {
        const request = this.http
            .get(`/people`)
            .pipe(map((res) => res.data))
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );

        const payload = await lastValueFrom(request);

        return payload;
    }

    async getPersonById(id:number): Promise<AxiosResponse> {
        const request = this.http
            .get(`/people/${id}`)
            .pipe(map((res) => res.data))
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );

        const payload = await lastValueFrom(request);

        return payload;
    }
    async getAllPlanets(): Promise<AxiosResponse> {
        const request = this.http
            .get(`/planets`)
            .pipe(map((res) => res.data))
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );

        const payload = await lastValueFrom(request);

        return payload;
    }

    async getPlanetById(id:number): Promise<AxiosResponse> {
        const request = this.http
            .get(`/planets/${id}`)
            .pipe(map((res) => res.data))
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );

        const payload = await lastValueFrom(request);

        return payload;
    }
}
