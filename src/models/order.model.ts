import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Customer, CustomerWithRelations} from './customer.model';

@model({settings: {strict: false}})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  // @property({
  //   type: 'number',
  //   required: true,
  // })

  @belongsTo(() => Customer)
  customerId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
  customer?: CustomerWithRelations;
}

export type OrderWithRelations = Order & OrderRelations;
