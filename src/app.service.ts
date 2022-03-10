import { Injectable } from '@nestjs/common';
import { FoodItemEntity } from './entities/food-item.entity';
import { FoodItemModel } from './models/food-item.model';

@Injectable()
export class AppService {
  db: Array<FoodItemEntity> = [
    { id: 1, name: 'carrot' },
    { id: 2, name: 'onion' },
  ];

  getAllItems(): Array<FoodItemEntity>{
    return this.db;
  }

  getById(id: number): FoodItemEntity{
    let item = this.db.find((x) => x.id == id);

    if (!item) throw new Error('Item not found');

    return item;
  }

  createItem(item: FoodItemModel): FoodItemEntity{
    let newId = this.db[this.db.length - 1].id + 1;

    let newItem: { id: number; name: string } = { id: newId, name: item.name };

    this.db.push(newItem);
    return newItem;
  }
}
