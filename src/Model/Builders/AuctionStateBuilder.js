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
        if(typeof state == 'string') {
            AuctionStateNew.like(state, this);
            AuctionStateInProgress.like(state, this);
            AuctionStateEnded.like(state, this);
        } else {
            this.state = state;
        }
        return this;
    }
}

export default AuctionStateBuilder;
