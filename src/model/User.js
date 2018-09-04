export class User {
    static null(){
        return {equals: (user) => false}
    }

    isAnonymous(){
        return this.anonymous;
    }

    equals(user) {
        return this == user
    }
}

export default User;
