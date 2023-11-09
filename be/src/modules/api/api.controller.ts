import { Controller, Get, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiService } from './api.service';

@Controller('api/v1')
export class ApiController {
    constructor(private apiService: ApiService) {}

    @Get('people')
    async getAllPersons(@Res() res: Response) {
        const persons = await this.apiService.getAllPersons();
        return res.status(HttpStatus.OK).send(persons);
    }

    @Get('people/:id')
    async getPersonById(@Param('id') id: number, @Res() res: Response) {
        try {
            const person = await this.apiService.getPersonById(id);
            return res.status(HttpStatus.OK).send(person);
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('planets')
    async getAllPlanets(@Res() res: Response) {
        const planets = await this.apiService.getAllPlanets();
        return res.status(HttpStatus.OK).send(planets);
    }

    @Get('planets/:id')
    async getPlanetsById(@Param('id') id: number, @Res() res: Response) {
        try {
            const planet = await this.apiService.getPlanetById(id);
            return res.status(HttpStatus.OK).send(planet);
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
