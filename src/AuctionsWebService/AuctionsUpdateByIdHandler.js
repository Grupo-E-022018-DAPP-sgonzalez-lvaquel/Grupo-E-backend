export function AuctionsUpdateByIdHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.update(req.params.id, req.body).then(auction =>
            res.json(AuctionsAdapter.serialize(auction))
        ).catch(next);
}

export default AuctionsUpdateByIdHandler;
