export function AuctionsCreateHandler({
    auctionsService,
    auctionsAdapter,
}) {
    return (req, res, next) =>
        auctionsService.create(req.body).then(auction =>
            res.json(
                auctionsAdapter.serialize(auction)
            ).status(201).end()
        ).catch(next);
}

export default AuctionsCreateHandler;
