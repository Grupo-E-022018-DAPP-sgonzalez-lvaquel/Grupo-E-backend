export default class BetsService {
    createBet(auctionId, betDTO) {
        return Promise.resolve(Object.assign({}, betDTO, {
            auctionId
        }));
    }

    getByAuctionId(auctionId) {
        return Promise.resolve([{
            id: 1,
            auctionId
        }]);
    }
}
