import {
    AuctionStateBuilder
} from './Builders';
import {
    User
} from './User';

export class Auction {

    constructor(state) {
        this.owner = User.null()
        this.lastBettor = User.null()
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
