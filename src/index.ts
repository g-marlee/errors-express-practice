import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => console.log(`Listening on port: ${port}.`));
