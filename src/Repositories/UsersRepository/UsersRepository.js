import {
    SequelizeRepository
} from '../SequelizeRepository';
import {
    UserBuilder
} from '../../Model/Builders';

export class UsersRepository extends SequelizeRepository {

    toModel(user) {
        return user && new UserBuilder()
            .withId(user.id)
            .build();
    }

    save({id}) {
        return this.schema.create({id}).then(user => this.toModel(user));
    }
}
