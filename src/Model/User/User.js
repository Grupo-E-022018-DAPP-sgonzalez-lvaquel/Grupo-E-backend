export class User {
    isAnonymous(){
        return this.role.isAnonymous();
    }

    equals(user) {
        return user.constructor && this.constructor.name == user.constructor.name && this.id == user.id;
    }

    newAuction(){
        return this.role.newAuction();
    }

    bet(){
        throw new Error();
    }
}

export default User;
