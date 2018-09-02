import Auction from "../Auction";

export class AuctionBuilder {

    build() {
        return new Auction();
    }

    withOwner(owner) {
        return this;
    }
}
