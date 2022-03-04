import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class FoodItemEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  calories: number;

  @Column()
  fat: number;

  @Column()
  carbs: number;

  @Column()
  protien: number;
}
