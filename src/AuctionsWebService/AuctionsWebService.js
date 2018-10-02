export default function AuctionsWebService({
    express,
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsUpdateByIdHandler,
    AuctionsDeleteByIdHandler,
}) {
    return express.Router()
        .get('/', AuctionsRetrieveHandler(...arguments))
        .get('/:id', AuctionsRetrieveByIdHandler(...arguments))
        .patch('/:id', AuctionsUpdateByIdHandler(...arguments))
        .delete('/:id', AuctionsDeleteByIdHandler(...arguments))
        .post('/', AuctionsCreateHandler(...arguments));
}
