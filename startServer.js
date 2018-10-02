import express from 'express';
import SubastifyWebService from './src/SubastifyWebService';
import AuctionsWebService, { AuctionsCreateHandler } from './src/AuctionsWebService';

const AuctionsService = () => {};
const AuctionsAdapter = () => {};

const app = express();

app.use(SubastifyWebService({
    express,
    AuctionsWebService,
    AuctionsCreateHandler,
    AuctionsService,
    AuctionsAdapter,
}));

app.listen(3000);
