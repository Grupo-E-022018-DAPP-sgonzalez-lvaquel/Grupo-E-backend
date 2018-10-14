import {
    AuctionStateNew,
    AuctionStateInProgress,
    AuctionStateEnded
} from '../Auction';


export class AuctionStateBuilder {
    constructor() {
        this.state = new AuctionStateNew();
    }

    build() {
        return this.state;
    }

    new() {
        this.state = new AuctionStateNew();
        return this;
    }

    inProgress() {
        this.state = new AuctionStateInProgress();
        return this;
    }

    ended() {
        this.state = new AuctionStateEnded();
        return this;
    }

    like(state) {
        const stateStr = state.name;
        AuctionStateNew.like(stateStr, this);
        AuctionStateInProgress.like(stateStr, this);
        AuctionStateEnded.like(stateStr, this);
        return this;
    }
}

export default AuctionStateBuilder;
