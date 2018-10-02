export default function AuctionsWebService({
    express,
    AuctionsCreateHandler
}) {
    return express.Router()
        .post('/', AuctionsCreateHandler(...arguments));
}
