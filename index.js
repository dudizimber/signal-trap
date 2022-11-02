import express from 'express';
import axios from "axios";

 
const app = express();

async function setTrapped() {

    const options = {
      method: 'GET',
      url: 'https://simpledb.vercel.app/api/add/trapped/' + version + '_' + new Date().toISOString(),
      headers: {userid: 'ffkx4l'}
    };
    
    return axios.request(options).then(function (response) {
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


const version = 8;

app.listen(process.env.PORT ?? 3010, () => {
    console.log('Started', version, process.env.K_REVISION);
})