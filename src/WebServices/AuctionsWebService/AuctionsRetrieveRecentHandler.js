export function AuctionsRetrieveRecentHandler({
    auctionsAdapter,
    auctionsService,
}) {
    return (req, res, next) => {
        auctionsService.getRecent().then(auctions => {
            res.json(
                auctions.map(auction =>
                    auctionsAdapter.serialize(auction)
                ));
        }).catch(next);
    };
}
