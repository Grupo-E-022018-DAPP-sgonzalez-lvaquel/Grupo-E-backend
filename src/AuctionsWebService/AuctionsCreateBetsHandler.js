export function AuctionsCreateBetsHandler({
    BetsService,
    BetsAdapter,
}) {
    return (req, res) => {
        const auctionId = req.params.id;
        const betDTO = BetsAdapter.parse(req.body).betDTO();
        BetsService.createBet(auctionId, betDTO).then(bet => {
            res.json(
                BetsAdapter.serialize(bet)
            );
        });
    };
}
