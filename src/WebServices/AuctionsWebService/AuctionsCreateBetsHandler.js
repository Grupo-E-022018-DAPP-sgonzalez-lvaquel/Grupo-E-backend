export function AuctionsCreateBetsHandler({
    betsService,
    betsAdapter,
}) {
    return (req, res, next) => {
        const auctionId = req.params.id;
        betsService.createBet(auctionId, req.body.amount, req.body.bettorId).then(bet => {
            res.json(
                betsAdapter.serialize(bet)
            );
        }).catch(next);
    };
}
