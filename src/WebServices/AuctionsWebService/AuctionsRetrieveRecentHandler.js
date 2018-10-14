export function AuctionsRetrieveRecentHandler({
    auctionsAdapter,
    auctionsService,
}) {
    return (req, res, next) => {
        auctionsService.getRecent().then(auctions => {
            res.json(
                auctionsAdapter.serialize(auctions)
            );
        }).catch(next);
    };
}
