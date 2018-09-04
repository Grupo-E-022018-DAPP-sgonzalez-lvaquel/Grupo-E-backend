import { AuctionStateNew, AuctionStateInProgress } from "../AuctionState";


export class AuctionStateBuilder{
    constructor(){
        this.state = new AuctionStateNew();
    }

    build(){
        return this.state;
    }

    new(){
        this.state = new AuctionStateNew();
        return this;
    }

    inProgress(){
        this.state = new AuctionStateInProgress();
        return this;
    }
}

export default AuctionStateBuilder;
