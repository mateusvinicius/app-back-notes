import { Result } from '@shared/core/Result';
import { ValueObject } from '@shared/domain/ValueObject';

export interface IPassword {
  value: string;
}
export class Password extends ValueObject<IPassword> {
  private constructor(props: IPassword) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  private static validate_password(password: string): boolean {
    const PasswordTeste = /[A-Z]+[a-z]+[0-9]+[!|@|#|$|%|^|&|*|(|)|-|_]/;
    if (!PasswordTeste.test(password)) return false;

    return true;
  }

  public static create(password: string): Result<Password> {
    if (password == null)
      return Result.fail<Password>('ParameterError:Password is null');
    if (!this.validate_password(password))
      return Result.fail<Password>('InvalidError:Password is invalid');
    return Result.ok(
      new Password({
        value: password,
      }),
    );
  }
}
