export function AuctionsRetrieveHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.getAll().then(auctions =>
            res.json(AuctionsAdapter.serialize(auctions))
        ).catch(next);
}

export default AuctionsRetrieveHandler;
