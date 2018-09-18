import {
    User
} from '../User/User';
import {
    UserRoleStrategyBuilder
} from './';

export class UserBuilder {

    constructor(){
        this.user = new User();
        this.user.role = new UserRoleStrategyBuilder(this.user).build();
    }

    build() {
        return this.user;
    }

    anonymous() {
        this.user.role = new UserRoleStrategyBuilder(this.user).anonymous().build();
        return this;
    }

    null() {
        this.user = {equals: () => false};
        return this;
    }
}
