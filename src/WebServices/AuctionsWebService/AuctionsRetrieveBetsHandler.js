export function AuctionsRetrieveBetsHandler({
    betsService,
    betsAdapter,
}) {
    return (req, res, next) => {
        betsService.getByAuctionId(req.params.id).then(bets => {
            res.json(
                bets.map(bet =>
                    betsAdapter.serialize(
                        bet
                    ))
            );
        }).catch(next);
    };
}
