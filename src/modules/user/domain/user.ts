import { Result } from '@shared/core/Result';
import { AggregateRoot } from '@shared/domain/AggregateRoot';
import { UniqueEntityID } from '@shared/domain/UniqueEntityID';
import { Mail } from './email';
import { Password } from './password';

export interface IUserAggregation {
  frist_name: string;
  last_name: string;
  email: Mail;
  password: Password;
}
export class UserAggregation extends AggregateRoot<IUserAggregation> {
  private constructor(props: IUserAggregation, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: IUserAggregation): Result<UserAggregation> {
    return Result.fail<UserAggregation>('ParameterError:frist name is null');
  }
}
