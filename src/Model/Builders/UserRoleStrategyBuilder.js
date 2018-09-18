import {
    UserAnonymousRoleStrategy,
    UserRegisteredRoleStrategy
} from '../User';

export class UserRoleStrategyBuilder {

    constructor(user) {
        this.user = user;
        this.role = new UserRegisteredRoleStrategy(this.user);
    }

    build(){
        return this.role;
    }

    anonymous() {
        this.role = new UserAnonymousRoleStrategy(this.user);
        return this;
    }
}
