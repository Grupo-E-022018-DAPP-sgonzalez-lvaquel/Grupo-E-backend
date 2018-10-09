export default function BetsWebService({
    express,
}) {
    return express.Router()
        .get('/');
}
