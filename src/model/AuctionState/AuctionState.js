import { AuctionStateBuilder } from "../Builders";


export class AuctionState {
    isInProgress(){
        return false;
    }
    
    start(){
        return new AuctionStateBuilder().inProgress().build();
    }

    end(){
        return new AuctionStateBuilder().ended().build();
    }
}

export default AuctionState;
