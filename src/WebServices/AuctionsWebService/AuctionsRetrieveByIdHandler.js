export function AuctionsRetrieveByIdHandler({
    AuctionsService,
    auctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.get(req.params.id).then(auction =>
            res.json(auctionsAdapter.serialize(auction))
                .status(200).end()
        ).catch(next);
}

export default AuctionsRetrieveByIdHandler;
