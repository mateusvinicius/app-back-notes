import { LastOrFristName } from './last_or_frist_name';

describe('Last or frist name value obejct', () => {
  it('should return invalid last or frist name value obejct ', () => {
    const suit = LastOrFristName.create('');

    expect(suit.isFailure).toBe(true);
  });

  it('should return valid last or frist name value obejct ', () => {
    const suit = LastOrFristName.create('any_name');

    expect(suit.isSuccess).toBe(true);
  });
});
