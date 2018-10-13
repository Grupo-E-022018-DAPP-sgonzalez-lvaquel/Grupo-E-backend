export class AuctionsService {

    constructor({
        AuctionBuilder,
        auctionsRepository
    }) {
        this.AuctionBuilder = AuctionBuilder;
        this.auctionsRepository = auctionsRepository;
    }

    create() {
        const auction = new this.AuctionBuilder()
            .build();
        return this.auctionsRepository.save(auction);
    }

    getAll() {
        return this.auctionsRepository.getAll();
    }

    get(id) {
        return this.auctionsRepository.get(id);
    }

    getRecent() {
        return this.auctionsRepository.getRecent();
    }

    delete(id) {
        return this.auctionsRepository.delete(id);
    }

    update(id, {
        owner,
        endsAt
    }) {
        const auction = new this.AuctionBuilder()
            .withId(id)
            .withOwner(owner)
            .endsAt(endsAt)
            .build();
        return this.auctionsRepository.save(auction);
    }
}
