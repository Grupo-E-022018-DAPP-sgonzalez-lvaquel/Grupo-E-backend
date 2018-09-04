import { AuctionState } from "./AuctionState";


export class AuctionStateInProgress extends AuctionState {
    isInProgress(){
        return true
    }
}

export default AuctionStateInProgress;
