import { Result } from '@shared/core/Result';
import { ValueObject } from '@shared/domain/ValueObject';

export interface ILastOrFristName {
  value: string;
}
export class LastOrFristName extends ValueObject<ILastOrFristName> {
  private constructor(props: ILastOrFristName) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(props: string): Result<LastOrFristName> {
    if (props === '')
      return Result.fail<LastOrFristName>(
        'InvalidError:Frist Name or Last Name is invalid',
      );

    return Result.ok<LastOrFristName>(new LastOrFristName({ value: props }));
  }
}
