import {
    AuctionsParser
} from './AuctionsParser';

export class AuctionsAdapter {

    parse(auction) {
        return new AuctionsParser(auction);
    }

    serialize({
        id,
        bets,
        owner,
        endDate
    }) {
        return {
            id,
            bets: bets.map(bet => bet.id),
            ownerId: owner.id,
            endDate
        };
    }
}
