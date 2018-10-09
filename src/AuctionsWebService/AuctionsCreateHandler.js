export function AuctionsCreateHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.create().then(auction =>
            res.json(
                AuctionsAdapter.serialize(auction)
            ).status(201).end()
        ).catch(next);
}

export default AuctionsCreateHandler;
