export class User {
    isAnonymous(){
        return this.role.isAnonymous();
    }

    equals(user) {
        return this == user;
    }

    newAuction(){
        return this.role.newAuction();
    }

    bet(){
        throw new Error();
    }
}

export default User;
