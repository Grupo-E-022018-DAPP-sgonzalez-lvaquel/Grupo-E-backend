import {
    User
} from "../User";


export class UserBuilder {

    constructor(){
        this.user = new User();
    }

    build() {
        return this.user;
    }

    anonymous() {
        this.user.anonymous = true
        return this;
    }

    null() {
        this.user = {equals: (user) => false}
        return this;
    }
}
