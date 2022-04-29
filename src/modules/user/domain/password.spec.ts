import { Password } from './password';

describe('Validate Object Password', () => {
  it('should return failed if password not provide', () => {
    const suit = Password.create();
    expect(suit.isFailure).toBe(true);
    expect(suit.getErrorValue()).toBe('ParameterError:Password is null');
  });

  it('should return sucess if provide password', () => {
    const suit = Password.create('Asasjkajk1212!');
    expect(suit.isSuccess).toBe(true);
    expect(suit.getValue().value).toBe('Asasjkajk1212!');
  });

  it('should return failed if provide invalid password ', () => {
    const suit = Password.create('ASASASsddsds');
    expect(suit.isFailure).toBe(true);
  });
});
