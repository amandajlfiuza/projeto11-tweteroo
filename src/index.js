import express from 'express';
import cors from 'cors';

const server = express();

server.listen(5000, () => {
    console.log('Listening on port 5000');
});