export function AuctionsCreateBetHandler({
    BetsService,
    BetsAdapter,
}) {
    return (req, res) => {
        const auctionId = req.params.id;
        const betDTO = BetsAdapter.parse(req.body).betDTO();
        const bet = BetsService.createBet(auctionId, betDTO);

        res.json(
            BetsAdapter.serialize(bet)
        );
    };
}
