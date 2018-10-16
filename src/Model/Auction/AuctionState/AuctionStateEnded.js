import { AuctionState } from './AuctionState';

export class AuctionStateEnded extends AuctionState {

    static like(state, builder) {
        if (state == this.name) {
            builder.ended();
        }
    }

}

export default AuctionStateEnded;
