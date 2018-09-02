import {
    User
} from "../User";


export class UserBuilder {

    build() {
        return new User();
    }

    anonymous() {
        return this;
    }
}
