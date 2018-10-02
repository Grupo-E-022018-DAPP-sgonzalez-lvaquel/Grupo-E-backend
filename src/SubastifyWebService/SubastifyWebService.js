export default function SubastifyWebService({
    express,
    AuctionsWebService
}) {
    return express.Router()
        .use('/auctions', AuctionsWebService(...arguments));
}
