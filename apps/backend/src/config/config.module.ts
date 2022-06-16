import { Module } from '@nestjs/common';
import * as Nest from '@nestjs/config';

@Module({
    imports: [Nest.ConfigModule.forRoot()]
})
export class ConfigModule {}
