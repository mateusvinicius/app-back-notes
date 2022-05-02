import { Password } from './password';
import { Mail } from './email';
import { UserAggregation } from './user';

describe('User Aggregation', () => {
  it('should return failed if frist name not provide', () => {
    const suit = UserAggregation.create({
      email: Mail.create('any_email@mail.com').getValue(),
      password: Password.create('Akjsdkjsd10!').getValue(),
      last_name: 'any_last_name',
    });
    expect(suit.isFailure).toBe(true);
    expect(suit.getErrorValue()).toBe('ParameterError:frist name is null');
  });
});
