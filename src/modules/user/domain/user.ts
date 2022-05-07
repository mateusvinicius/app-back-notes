import { Result } from '@shared/core/Result';
import { AggregateRoot } from '@shared/domain/AggregateRoot';
import { UniqueEntityID } from '@shared/domain/UniqueEntityID';
import { Guard } from '@shared/core/Guard';
import { LastOrFristName } from './last_or_frist_name';
import { Mail } from './email';
import { Password } from './password';

export interface IUserAggregation {
  frist_name: LastOrFristName;
  last_name: LastOrFristName;
  email: Mail;
  password: Password;
}
export class UserAggregation extends AggregateRoot<IUserAggregation> {
  private constructor(props: IUserAggregation, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: IUserAggregation): Result<UserAggregation> {
    const guardagainstNullOrUndefinedProps = [
      { argument: props.frist_name, argumentName: 'firstName' },
      { argument: props.last_name, argumentName: 'lastName' },
      { argument: props.email, argumentName: 'email' },
      { argument: props.password, argumentName: 'password' },
    ];
    const guard = Guard.againstNullOrUndefinedBulk(
      guardagainstNullOrUndefinedProps,
    );
    if (guard.isFailure) {
      return Result.fail<UserAggregation>(guard.getValue());
    }

    return Result.ok<UserAggregation>(new UserAggregation(props));
  }
}
