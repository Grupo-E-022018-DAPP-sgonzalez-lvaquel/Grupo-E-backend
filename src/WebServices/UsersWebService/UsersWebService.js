export function UsersWebService({
    express,
    UsersFindOrCreateHandler
}) {
    return express.Router()
        .patch('/', UsersFindOrCreateHandler(...arguments));
}
