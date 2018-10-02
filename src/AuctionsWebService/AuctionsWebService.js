export default function AuctionsWebService({
    express,
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
}) {
    return express.Router()
        .get('/', AuctionsRetrieveHandler(...arguments))
        .get('/:id', AuctionsRetrieveByIdHandler(...arguments))
        .post('/', AuctionsCreateHandler(...arguments));
}
