export default function AuctionsWebService({
    express,
    AuctionsCreateHandler,
    AuctionsRetrieveHandler
}) {
    return express.Router()
        .get('/', AuctionsRetrieveHandler(...arguments))
        .post('/', AuctionsCreateHandler(...arguments));
}
