import express from 'express';
import * as http from 'http';
import debug from 'debug';
import cors from 'cors';
import database from './database';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3001;
const debugLog: debug.IDebugger = debug('app');


// here we are adding middleware to parse all incoming requests as JSON 
app.use(express.json());
app.use(cors());

app.get('/api/quiz', (req, res) => {
    let questions = database.getQuestions();
    res.json({questions});
});

app.put('/api/quiz/question', (req, res) => {
    let questions = database.updateQuestion(req.body);
    
    res.json({questions});
});

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

app.listen(port);