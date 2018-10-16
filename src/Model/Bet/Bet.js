export class Bet {

    constructor(amount, auction, bettor){
        this.amount = amount;        
        this.auction = auction;        
        this.bettor = bettor;            
    }

    validate(auction) {
        return auction.canUserBet(this.bettor);
    }
}
