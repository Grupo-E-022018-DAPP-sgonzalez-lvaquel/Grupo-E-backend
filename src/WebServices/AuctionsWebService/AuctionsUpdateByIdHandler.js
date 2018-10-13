export function AuctionsUpdateByIdHandler({
    AuctionsService,
    auctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.update(req.params.id, req.body).then(auction =>
            res.json(auctionsAdapter.serialize(auction))
                .status(202).end()
        ).catch(next);
}

export default AuctionsUpdateByIdHandler;
