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
        return Promise.resolve('All Auctions Retrieved');
    }

    get(id) {
        return Promise.resolve('Auctions Retrieved Id: ' + id);
    }

    getRecent() {
        return Promise.resolve('Recent Auctions');
    }

    delete(id) {
        return Promise.resolve('Auctions Deleted Id: ' + id);
    }

    update(id, attrs) {
        return Promise.resolve(`Auction updated id: ${id} with attrs: ${Object.entries(attrs)}`);
    }
}
