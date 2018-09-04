import {
    AuctionStateBuilder,
    UserBuilder
} from './Builders';


export class Auction {

    constructor(owner, lastBettor, state) {
        this.owner = owner || new UserBuilder().null().build();
        this.lastBettor = lastBettor || new UserBuilder().null().build();
        this.state = state || new AuctionStateBuilder().new().build();
    }

    start() {
        this.state = this.state.start();
    }

    isInProgress() {
        return this.state.isInProgress();
    }

    canUserBet(user) {
        return this.isInProgress() &&
            !user.isAnonymous() &&
            !this.isLastBettor(user) &&
            !this.isOwner(user);
    }

    isLastBettor(user) {
        return this.lastBettor.equals(user);
    }

    isOwner(user) {
        return this.owner.equals(user);
    }
}

export default Auction;
