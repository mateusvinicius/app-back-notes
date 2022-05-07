import { Password } from './password';
import { Mail } from './email';
import { UserAggregation } from './user';
import { LastOrFristName } from './last_or_frist_name';

describe('User Aggregation', () => {
  it('should create valid  user', () => {
    const suit = UserAggregation.create({
      email: Mail.create('any_email@mail.com').getValue(),
      password: Password.create('Akjsdkjsd10!').getValue(),
      last_name: LastOrFristName.create('any_lastname').getValue(),
      frist_name: LastOrFristName.create('any_lastname').getValue(),
    });
    expect(suit.isSuccess).toBe(true);
  });
});
