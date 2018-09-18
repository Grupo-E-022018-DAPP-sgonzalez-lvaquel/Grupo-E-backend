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

    end() {
        this.state = this.state.end();
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

    addBet() {
        this.calculateEndDate();
        // Register bet
    }

    calculateEndDate() {
        if (this.isAboutToEnd() && this.canExtend()) {
            this.extend();
        }
    }

    extend() {
        const minutes5 = 300000;
        this.endDate = this.endDate + minutes5;
    }

    isAboutToEnd() {
        const minutes5 = 300000;
        const timeUntilEnd = (this.endDate - this.clock.now());
        const alreadyEnded = timeUntilEnd < 0;
        return timeUntilEnd < minutes5 && !alreadyEnded;
    }

    canExtend() {
        const days2 = 172800000;
        const timeExtended = (this.endDate - this.originalEndDate);
        return timeExtended < days2;
    }
}

export default Auction;
