export function AuctionsRetrieveHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.getAll().then(auctions =>
            res.json(AuctionsAdapter.serialize(auctions))
                .status(200).end()
        ).catch(next);
}

export default AuctionsRetrieveHandler;
