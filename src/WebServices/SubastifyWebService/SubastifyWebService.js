export function SubastifyWebService({
    express,
    bodyParser,
    AuctionsWebService,
    UsersWebService,
}) {
    return express.Router()
        .use(bodyParser.json())
        .use('/users', UsersWebService(...arguments))
        .use('/auctions', AuctionsWebService(...arguments));
}

