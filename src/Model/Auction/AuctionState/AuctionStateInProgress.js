import { AuctionState } from './AuctionState';


export class AuctionStateInProgress extends AuctionState {

    static like(state, builder) {
        if (state == this.name) {
            builder.inProgress();
        }
    }

    isInProgress(){
        return true;
    }
}

export default AuctionStateInProgress;
