export default function AuctionsWebService({
    express,
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsUpdateByIdHandler,
    AuctionsDeleteByIdHandler,
    AuctionsCreateBetHandler,
}) {
    return express.Router()
        .get('/', AuctionsRetrieveHandler(...arguments))
        .get('/:id', AuctionsRetrieveByIdHandler(...arguments))
        .patch('/:id', AuctionsUpdateByIdHandler(...arguments))
        .delete('/:id', AuctionsDeleteByIdHandler(...arguments))
        .post('/:id/bets', AuctionsCreateBetHandler(...arguments))
        .post('/', AuctionsCreateHandler(...arguments));
}
