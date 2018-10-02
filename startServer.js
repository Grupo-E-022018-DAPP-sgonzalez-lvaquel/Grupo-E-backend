import express from 'express';
import SubastifyWebService from './src/SubastifyWebService';
import AuctionsWebService, {
    AuctionsCreateHandler,
    AuctionsRetrieveHandler,
} from './src/AuctionsWebService';

const AuctionsService = {
    create: () => Promise.resolve('Auction Created'),
    getAll: () => Promise.resolve('All Auctions Retrieved'),
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
    AuctionsService,
    AuctionsAdapter,
}));

app.listen(3000);
