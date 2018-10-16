export function AuctionsDeleteByIdHandler({
    auctionsService,
}) {
    return (req, res, next) =>
        auctionsService.delete(req.params.id).then(() =>
            res.status(204).end()
        ).catch(next);
}

export default AuctionsDeleteByIdHandler;
