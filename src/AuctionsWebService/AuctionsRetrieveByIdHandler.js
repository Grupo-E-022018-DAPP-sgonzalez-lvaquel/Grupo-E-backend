export function AuctionsRetrieveByIdHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.get(req.params.id).then(auction =>
            res.json(AuctionsAdapter.serialize(auction))
        ).catch(next);
}

export default AuctionsRetrieveByIdHandler;
