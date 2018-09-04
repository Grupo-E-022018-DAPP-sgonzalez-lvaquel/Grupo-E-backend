import Auction from '../Auction';

export class AuctionBuilder {

    constructor() {
        this.auction = new Auction();
    }

    build() {
        return this.auction;
    }   

    withOwner(owner) {
        this.auction.owner = owner;
        return this;
    }

    inProgress() {
        this.auction.start();
        return this;
    }

    withLastBettor(bettor){
        this.auction.lastBettor = bettor;
        return this;
    }

    ended(){
        this.auction.end();
        return this;
    }
}
