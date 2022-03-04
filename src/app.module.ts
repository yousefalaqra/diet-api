import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodItemsModule } from './food-items/food-items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'dietdb',
      autoLoadEntities: true,
      synchronize: true,
    }),

    FoodItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
