export function AuctionsCreateHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.create().then(auction =>
            res.json(
                AuctionsAdapter.serialize(auction)
            )
        ).catch(next);
}

export default AuctionsCreateHandler;
