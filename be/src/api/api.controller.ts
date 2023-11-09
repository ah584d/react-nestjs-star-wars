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
        try{
        const person2 = await this.apiService.getPersonById(id);
        console.log(person2);
        return res.status(HttpStatus.OK).send(person2);
        } catch(error) {
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
