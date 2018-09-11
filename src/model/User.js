import { AuctionBuilder } from './Builders';

export class User {
    isAnonymous(){
        return this.anonymous;
    }

    equals(user) {
        return this == user;
    }

    newAuction(){
        return new AuctionBuilder().withOwner(this).build();
    }
}

export default User;
