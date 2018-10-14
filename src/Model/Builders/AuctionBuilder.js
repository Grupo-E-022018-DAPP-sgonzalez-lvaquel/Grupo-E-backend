import { Auction } from '../Auction';
import { AuctionStateBuilder } from './AuctionStateBuilder';

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

    withClock(clock) {
        this.auction.clock = clock;
        return this;
    }

    withOriginalEndDate(date) {
        this.auction.originalEndDate = date;
        return this;
    }

    endsAt(date) {
        this.auction.endDate = date;
        return this;
    }

    withId(id) {
        this.auction.id = id;
        return this;
    }

    withBets(bets) {
        this.auction.bets = bets;
        return this;
    }

    withState(state) {
        this.auction.state = new AuctionStateBuilder().like(state).build();
        return this;
    }
}
