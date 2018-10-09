export function AuctionsRetrieveRecentHandler({
    AuctionsAdapter,
    AuctionsService,
}) {
    return (req, res, next) => {
        AuctionsService.getRecent().then(auctions => {
            res.json(
                AuctionsAdapter.serialize(auctions)
            );
        }).catch(next);
    };
}
