export function AuctionsWebService({
    express,
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsRetrieveRecentHandler,
    AuctionsUpdateByIdHandler,
    AuctionsDeleteByIdHandler,
    AuctionsCreateBetsHandler,
    AuctionsRetrieveBetsHandler,
}) {
    return express.Router()
        .get('/', AuctionsRetrieveHandler(...arguments))
        .get('/recent', AuctionsRetrieveRecentHandler(...arguments))
        .get('/:id', AuctionsRetrieveByIdHandler(...arguments))
        .patch('/:id', AuctionsUpdateByIdHandler(...arguments))
        .delete('/:id', AuctionsDeleteByIdHandler(...arguments))
        .get('/:id/bets', AuctionsRetrieveBetsHandler(...arguments))
        .post('/:id/bets', AuctionsCreateBetsHandler(...arguments))
        .post('/', AuctionsCreateHandler(...arguments));
}
