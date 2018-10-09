export function SubastifyWebService({
    express,
    bodyParser,
    AuctionsWebService
}) {
    return express.Router()
        .use(bodyParser.json())
        .use('/auctions', AuctionsWebService(...arguments));
}

