import { Result } from '@shared/core/Result';
import { AggregateRoot } from '@shared/domain/AggregateRoot';
import { UniqueEntityID } from '@shared/domain/UniqueEntityID';
import { Guard } from '@shared/core/Guard';
import { LastOrFristName } from './last_or_frist_name';
import { Mail } from './email';
import { Password } from './password';
import { AddNewUserDomainEvent } from './event/addNewUser.event';

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

  public static create(
    props: IUserAggregation,
    id?: UniqueEntityID,
  ): Result<UserAggregation> {
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

    const idWasProvided = !!id;

    const user = new UserAggregation(props, id);
    if (!idWasProvided) {
      user.addDomainEvent(new AddNewUserDomainEvent(user));
    }

    return Result.ok<UserAggregation>(user);
  }
}
