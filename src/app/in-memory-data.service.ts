import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        name: 'Ned',
        address: 'Winterfell',
        gender: 'Male'
      },
      {
        id: 2,
        name: 'Tywin',
        address: 'Sasterly Rock',
        gender: 'Male'
      },
      {
        id: 3,
        name: 'Olena',
        address: 'High Garden',
        gender: 'Female'
      }
    ];
    return {users};
  }
}
