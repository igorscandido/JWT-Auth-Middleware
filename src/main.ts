import express, {
    Request,
    Response,
    json
} from 'express';

const port = 3030;

const app = express();
app.use(json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        name: "Chat",
        version: "Alpha 0.1"
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})