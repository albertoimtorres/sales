import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'sales',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'marketplace',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class SalesDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'sales';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.sales', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
