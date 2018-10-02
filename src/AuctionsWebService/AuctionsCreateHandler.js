export function AuctionsCreateHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.create().then(auction =>
            res.json(
                AuctionsAdapter(auction).serialize()
            )
        ).catch(next);
}

export default AuctionsCreateHandler;
