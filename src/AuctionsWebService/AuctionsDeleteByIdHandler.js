export function AuctionsDeleteByIdHandler({
    AuctionsService
}) {
    return (req, res, next) =>
        AuctionsService.delete(req.params.id).then(() =>
            res.status(204).end()
        ).catch(next);
}

export default AuctionsDeleteByIdHandler;
