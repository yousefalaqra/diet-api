import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FoodItemModel } from './models/food-item.model';

@Controller('')
export class AppController {
 
  constructor(private readonly appService: AppService) {}

  // @Get('items')
  // getHello(): Array<{ id: number; name: string }> {
  //   return this.appService.getAllItems();
  // }

  // @Get('items/:id')
  // getById(@Param('id') id: number): { id: number; name: string } {
  //   return this.appService.getById(id);
  // }

  // @Post('items')
  // create(@Body() item: FoodItemModel) {
  //   return this.appService.createItem(item);
  // }
}
