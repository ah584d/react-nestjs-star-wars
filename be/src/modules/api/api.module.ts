import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BASE_URL } from '../../common/consts';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    imports: [HttpModule.register({ baseURL: BASE_URL })],
    providers: [ApiService],
    controllers: [ApiController],
})
export class ApiModule {}
