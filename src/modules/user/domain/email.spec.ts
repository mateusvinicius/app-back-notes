import { Mail } from './email';

describe('Validate Object Email', () => {
  it('should return failed if email not provide', () => {
    const suit = Mail.create();
    expect(suit.isFailure).toBe(true);
    expect(suit.getErrorValue()).toBe('ParameterError:Email is null');
  });

  it('should return sucess if provide email', () => {
    const suit = Mail.create('any@domain.com.br');
    expect(suit.isSuccess).toBe(true);
    expect(suit.getValue().value).toBe('any@domain.com.br');
  });

  it('should return failed if provide invalid email ', () => {
    const suit = Mail.create('any');
    expect(suit.isFailure).toBe(true);
  });

  it('should to lowcase if provide uppercase mail ', () => {
    const suit = Mail.create('AnY@DomaiN.Com.Br');
    expect(suit.isSuccess).toBe(true);
    expect(suit.getValue().value).toBe('any@domain.com.br');
  });
});
