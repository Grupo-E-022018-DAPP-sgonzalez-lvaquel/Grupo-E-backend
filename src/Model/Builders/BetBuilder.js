import {
    Bet
} from '../Bet';

export class BetBuilder {

    constructor() {
        this.bet = new Bet();
    }

    withAmount(amount) {
        this.bet.amount = amount;
        return this;
    }

    withBettor(bettor) {
        this.bet.bettor = bettor;
        return this;
    }

    withAuction(auction) {
        this.bet.auction = auction;
        return this;
    }

    build() {
        return this.bet;
    }
}
