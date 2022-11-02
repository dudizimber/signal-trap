import express from 'express';

 
const app = express();


process.on('SIGINT', async () => {
    console.log('Got SIGINT. Shutting down...', version, process.env.K_REVISION);
    process.exit(0);
})


process.on('SIGTERM', async () => {
    console.log('Got SIGTERM. Shutting down...', version, process.env.K_REVISION);
    process.exit(0);
})


app.use((req, res) => {
    res.send();
})


const version = 6;

app.listen(process.env.PORT ?? 3010, () => {
    console.log('Started', version, process.env.K_REVISION);
})