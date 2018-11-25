import {
    AuctionsParser
} from './AuctionsParser';

export class AuctionsAdapter {

    parse(auction) {
        return new AuctionsParser(auction);
    }

    serialize({
        title,
        description,
        imageUrl,
        id,
        bets,
        owner,
        endDate,
        state,
    }) {
        return {
            title,
            description,
            imageUrl,
            id,
            bets: bets.map(bet => bet.id),
            ownerId: owner.id,
            endDate,
            state: state.name,
        };
    }
}
