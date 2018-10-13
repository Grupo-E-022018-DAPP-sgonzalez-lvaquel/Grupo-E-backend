import { AuctionsParser } from './AuctionsParser';

export class AuctionsAdapter {

    parse(auction) {
        return new AuctionsParser(auction);
    }

    serialize(a){
        return a;
    }
}
