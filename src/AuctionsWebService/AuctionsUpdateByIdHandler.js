export function AuctionsUpdateByIdHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.update(req.params.id, req.body).then(auction =>
            res.json(AuctionsAdapter.serialize(auction))
                .status(202).end()
        ).catch(next);
}

export default AuctionsUpdateByIdHandler;
