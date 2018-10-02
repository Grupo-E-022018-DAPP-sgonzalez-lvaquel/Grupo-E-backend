export default function AuctionsWebService({
    express,
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsUpdateByIdHandler,
}) {
    return express.Router()
        .get('/', AuctionsRetrieveHandler(...arguments))
        .get('/:id', AuctionsRetrieveByIdHandler(...arguments))
        .patch('/:id', AuctionsUpdateByIdHandler(...arguments))
        .post('/', AuctionsCreateHandler(...arguments));
}
