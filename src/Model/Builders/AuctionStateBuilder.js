import { 
    AuctionStateNew, 
    AuctionStateInProgress, 
    AuctionStateEnded 
} from '../AuctionState';


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

    ended(){
        this.state = new AuctionStateEnded();
        return this;
    }
}

export default AuctionStateBuilder;
