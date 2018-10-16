export class AuctionsParser {

    constructor(auction) {
        this.auction = auction;
    }

    get owner() {
        return this.auction.owner;
    }
}
