export function AuctionsCreateHandler({
    AuctionsService,
    auctionsAdapter,
}) {
    return (req, res, next) =>
        AuctionsService.create(req.body).then(auction =>
            res.json(
                auctionsAdapter.serialize(auction)
            ).status(201).end()
        ).catch(next);
}

export default AuctionsCreateHandler;
