export function AuctionsCreateBetsHandler({
    BetsService,
    BetsAdapter,
}) {
    return (req, res, next) => {
        const auctionId = req.params.id;
        BetsService.createBet(auctionId, req.body).then(bet => {
            res.json(
                BetsAdapter.serialize(bet)
            );
        }).catch(next);
    };
}
