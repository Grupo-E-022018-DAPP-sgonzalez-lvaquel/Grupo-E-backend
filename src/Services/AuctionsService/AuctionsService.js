export class AuctionsService {

    constructor({
        AuctionBuilder,
        auctionRepository
    }) {
        this.AuctionBuilder = AuctionBuilder;
        this.auctionRepository = auctionRepository;
    }

    create() {
        const auction = new this.AuctionBuilder()
            .build();
        return this.auctionRepository.save(auction);
    }

    getAll() {
        return this.auctionRepository.getAll();
    }

    get(id) {
        return this.auctionRepository.get(id);
    }

    getRecent() {
        return this.auctionRepository.getRecent();
    }

    delete(id) {
        return this.auctionRepository.delete(id);
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
        return this.auctionRepository.save(auction);
    }
}
