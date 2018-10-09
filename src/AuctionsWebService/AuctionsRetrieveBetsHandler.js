export function AuctionsRetrieveBetsHandler({
    BetsService,
    BetsAdapter,
}) {
    return (req, res) => {
        BetsService.getByAuctionId(req.params.id).then(bets => {
            res.json(
                BetsAdapter.serialize(
                    bets
                )
            );
        });
    };
}
