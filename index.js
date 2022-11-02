import express from 'express';

 
const app = express();

async function setTrapped() {
    import axios from "axios";

    const options = {
      method: 'GET',
      url: 'https://simpledb.vercel.app/api/add/trapped/' + version,
      headers: {userid: 'ffkx4l'}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}

process.on('SIGINT', async () => {
    console.log('Got SIGINT. Shutting down...', version, process.env.K_REVISION);
    await setTrapped();
    process.exit(0);
})


process.on('SIGTERM', async () => {
    console.log('Got SIGTERM. Shutting down...', version, process.env.K_REVISION);
    await setTrapped();
    process.exit(0);
})


app.use((req, res) => {
    res.send();
})


const version = 7;

app.listen(process.env.PORT ?? 3010, () => {
    console.log('Started', version, process.env.K_REVISION);
})