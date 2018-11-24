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
            .withKid(user.kid)
            .build();
    }

    findOrCreate(options) {
        return this.schema.findOrCreate({where: options}).then(users => users.map(this.toModel));
    }

    save({id}) {
        return this.schema.create({id}).then(user => this.toModel(user));
    }
}
