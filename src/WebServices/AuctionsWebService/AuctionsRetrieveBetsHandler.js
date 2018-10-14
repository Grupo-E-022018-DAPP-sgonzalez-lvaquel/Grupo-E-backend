export function AuctionsRetrieveBetsHandler({
    betsService,
    betsAdapter,
}) {
    return (req, res, next) => {
        betsService.getByAuctionId(req.params.id).then(bets => {
            res.json(
                betsAdapter.serialize(
                    bets
                )
            );
        }).catch(next);
    };
}
