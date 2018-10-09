export default class AuctionsService {
    create() {
        return Promise.resolve('Auction Created');
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
