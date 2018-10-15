export function AuctionsRetrieveHandler({
    auctionsService,
    auctionsAdapter,
}) {
    return (req, res, next) =>
        auctionsService.getAll().then(auctions =>
            res.json(
                auctions.map(auction =>
                    auctionsAdapter.serialize(auction)
                ))
        ).catch(next);
}

export default AuctionsRetrieveHandler;
