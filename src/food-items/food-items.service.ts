import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodItemEntity } from './entities/food-items.entity';

@Injectable()
export class FoodItemsService {
  constructor(
    @InjectRepository(FoodItemEntity)
    private _repository: Repository<FoodItemEntity>,
  ) {}

  getAll(): Promise<Array<FoodItemEntity>> {
    return this._repository.find();
  }

  async create(model: any) : Promise<FoodItemEntity> {
    // model ==> entity
    let createdEntity = this._repository.create({calories: 10, carbs: 1, fat: 1, name: 'test', protien: 1, quantity: 1});

    await this._repository.save(createdEntity);

    return createdEntity;
  }

  // update
  // delete
  // get by id
}
