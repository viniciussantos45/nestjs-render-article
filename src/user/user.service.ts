import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];

  findAll() {
    return this.users;
  }
}
