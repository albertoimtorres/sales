import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {SalesDataSource} from '../datasources';
import {Customer, Order, OrderRelations} from '../models';
import {CustomerRepository} from './customer.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
  > {

  public readonly customer: BelongsToAccessor<Customer, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.sales') dataSource: SalesDataSource,
    @repository.getter('CustomerRepository') customerRepositoryGetter: Getter<CustomerRepository>,
  ) {
    super(Order, dataSource);
    this.customer = this.createBelongsToAccessorFor('customer', customerRepositoryGetter);

    this.registerInclusionResolver('customer', this.customer.inclusionResolver);
  }
}
