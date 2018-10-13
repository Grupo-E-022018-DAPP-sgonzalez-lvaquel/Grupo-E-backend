export function AuctionsRetrieveHandler({
    AuctionsService,
    auctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.getAll().then(auctions =>
            res.json(auctionsAdapter.serialize(auctions))
                .status(200).end()
        ).catch(next);
}

export default AuctionsRetrieveHandler;
