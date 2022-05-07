import { IDomainEvent } from '@shared/domain/events/IDomainEvent';
import { UniqueEntityID } from '@shared/domain/UniqueEntityID';
import { UserAggregation } from '../user';

export class AddNewUserDomainEvent implements IDomainEvent {
  dateTimeOccurred: Date;

  user: UserAggregation;

  constructor(props: UserAggregation) {
    this.user = props;
    this.dateTimeOccurred = new Date();
  }

  getAggregateId(): UniqueEntityID {
    return this.user.id;
  }
}
