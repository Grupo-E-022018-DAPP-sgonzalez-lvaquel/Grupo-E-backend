export function AuctionsRetrieveRecentHandler({
    auctionsAdapter,
    AuctionsService,
}) {
    return (req, res, next) => {
        AuctionsService.getRecent().then(auctions => {
            res.json(
                auctionsAdapter.serialize(auctions)
            );
        }).catch(next);
    };
}
