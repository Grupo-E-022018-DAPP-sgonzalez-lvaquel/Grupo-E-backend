export function AuctionsRetrieveByIdHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.get(req.params.id).then(auctions =>
            res.json(AuctionsAdapter.serialize(auctions))
        ).catch(next);
}

export default AuctionsRetrieveByIdHandler;
