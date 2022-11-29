import { User } from '../../api/user/user.entity';

export default class TestUtil {
  static giveMeAValideUser(): User {
    const user = new User();
    user.id = 1;
    user.name = 'John Due';
    user.email = 'john@email.com';
    user.password = 'password';
    user.role = 'admin';
    user.lastLoginAt = new Date();

    return user;
  }
}
