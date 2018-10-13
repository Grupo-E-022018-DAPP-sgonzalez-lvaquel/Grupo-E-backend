export class AuctionsRepository {
    save(auction) {
        return Promise.resolve(auction);
    }
    
    getAll() {
        return Promise.resolve([]);
    }

    get(id) {
        return Promise.resolve({});
    }

    getRecent() {
        return Promise.resolve([]);
    }

    delete(id) {
        return Promise.resolve();
    }

}
