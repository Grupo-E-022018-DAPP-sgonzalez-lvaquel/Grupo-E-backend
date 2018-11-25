export class AuctionsService {

    constructor({
        AuctionBuilder,
        auctionsRepository
    }) {
        this.AuctionBuilder = AuctionBuilder;
        this.auctionsRepository = auctionsRepository;
    }

    create({
        title,
        description,
        imageUrl,
        endDate,
        owner
    }) {
        const auction = new this.AuctionBuilder()
            .withTitle(title)
            .withDescription(description)
            .withImageUrl(imageUrl)
            .withOriginalEndDate(new Date(Date.parse(endDate)))
            .withOwner(owner)
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
