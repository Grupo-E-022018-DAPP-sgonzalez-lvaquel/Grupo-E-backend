import AuctionState from './AuctionState';


export class AuctionStateNew extends AuctionState {

    static like(state, builder) {
        if (state == this.name) {
            builder.new();
        }
    }
}

export default AuctionStateNew;
