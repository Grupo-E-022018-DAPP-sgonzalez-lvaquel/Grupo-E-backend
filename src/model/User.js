export class User {
    isAnonymous(){
        return this.anonymous;
    }

    equals(user) {
        return this == user
    }
}

export default User;
