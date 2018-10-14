export function AuctionsRetrieveHandler({
    auctionsService,
    auctionsAdapter,
}) {
    return (req, res, next) =>
        auctionsService.getAll().then(auctions =>
            res.json(auctionsAdapter.serialize(auctions))
                .status(200).end()
        ).catch(next);
}

export default AuctionsRetrieveHandler;
