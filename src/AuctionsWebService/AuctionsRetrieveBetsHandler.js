export function AuctionsRetrieveBetsHandler({
    BetsService,
    BetsAdapter,
}) {
    return (req, res, next) => {
        BetsService.getByAuctionId(req.params.id).then(bets => {
            res.json(
                BetsAdapter.serialize(
                    bets
                )
            );
        }).catch(next);
    };
}
