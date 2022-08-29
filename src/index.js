import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const newUser = req.body;
    users.push({
        ...newUser,
        id: users.length + 1,
    });
    res.status(201).send('OK');
});

server.post('/tweets', (req, res) => {
    const newTweet = req.body;
    tweets.push({
        ...newTweet,
        id: tweets.length + 1,
    });
    res.status(201).send('OK');
});

server.get('/tweets', (req, res) => {
    const lastTweets = tweets.slice(tweets.length - 10);
    const displayedTweets = lastTweets.map(tweet => {
        const userObj = users.find(value => value.username === tweet.username);
        const user = userObj.avatar;
        return ({...tweet, avatar: user});
    });
    res.send(displayedTweets);
});

server.listen(5000, () => {
    console.log('Listening on port 5000');
});