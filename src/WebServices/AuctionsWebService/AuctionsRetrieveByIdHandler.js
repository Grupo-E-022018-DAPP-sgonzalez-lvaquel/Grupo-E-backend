export function AuctionsRetrieveByIdHandler({
    auctionsService,
    auctionsAdapter
}) {
    return (req, res, next) =>
        auctionsService.get(req.params.id).then(auction =>
            res.json(auctionsAdapter.serialize(auction))
                .status(200).end()
        ).catch(next);
}

export default AuctionsRetrieveByIdHandler;
