export function AuctionsRetrieveByIdHandler({
    AuctionsService,
    AuctionsAdapter
}) {
    return (req, res, next) =>
        AuctionsService.get(req.params.id).then(auction =>
            res.json(AuctionsAdapter.serialize(auction))
                .status(200).end()
        ).catch(next);
}

export default AuctionsRetrieveByIdHandler;
