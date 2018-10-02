import express from 'express';
import SubastifyWebService from './src/SubastifyWebService';
import AuctionsWebService, {
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
} from './src/AuctionsWebService';

const AuctionsService = {
    create: () => Promise.resolve('Auction Created'),
    getAll: () => Promise.resolve('All Auctions Retrieved'),
    get: (id) => Promise.resolve('Auctions Retrieved Id: ' + id),
};

const AuctionsAdapter = {
    serialize: (a) => a,
};

const app = express();

app.use(SubastifyWebService({
    express,
    AuctionsWebService,
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
    AuctionsRetrieveByIdHandler,
    AuctionsService,
    AuctionsAdapter,
}));

app.listen(3000);
