/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeEntity } from './cafe/cafe.entity';
import { CafeModule } from './cafe/cafe.module';
import { TiendaEntity } from './tienda/tienda.entity';
import { TiendaModule } from './tienda/tienda.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TiendaModule, CafeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cafe',
      entities: [CafeEntity, TiendaEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true

    }),
    //MuseumArtworkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
