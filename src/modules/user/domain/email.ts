import { Result } from '@shared/core/Result';
import { ValueObject } from '@shared/domain/ValueObject';
import isEmail from 'validator/lib/isEmail';

export interface IMail {
  value: string;
}

export class Mail extends ValueObject<IMail> {
  private constructor(props: IMail) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(email: string): Result<Mail> {
    if (email == null) return Result.fail<Mail>('ParameterError:Email is null');
    if (!isEmail(email))
      return Result.fail<Mail>('InvalidError:Email is invalid');
    return Result.ok<Mail>(
      new Mail({
        value: email.trim().toLowerCase(),
      }),
    );
  }
}
