import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { FoodItemsService } from './food-items.service';

// http://locahost:3000/items | GET | POST
@Controller('items')
export class FoodItemsController {
  constructor(private _service: FoodItemsService) {}

  @Get()
  getAll() {
    return this._service.getAll();
  }

  @Post()
  creat() {
    return this._service.create();
  }

  // @Put(':id')
  // update(@Body(model: FoodI)){}
}
