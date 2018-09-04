import { AuctionStateBuilder } from "../Builders";


export class AuctionState {
    isInProgress(){
        return false;
    }
    start(){
        return new AuctionStateBuilder().inProgress().build();
    }
}

export default AuctionState;
