// const axios = require('axios');

// axios.get('http://127.0.0.1:5000/location')
//   .then((response) => {
//     console.log('Success!');
//     console.log(response.data);
//   });
//   .catch((response) => {
//     console.log('Error!');
//     console.log(error.response.data);
//   });

//   const FormData = require('form-data'); // npm install --save form-data

//   const form = new FormData();
//   form.append('weather-report-proxy-server', fs.createReadStream(weather-report-proxy-server.path));
  
//   const requestLocation = {
//     headers: {
//       'Authorization': `Bearer ${access_token}`,
//       ...form.getHeaders()
//     }
//   };
  
//   return axios.post(url, form, request_config);


const axios = require('axios');

const LOCATIONIQ_KEY = process.env['LOCATIONIQ_KEY'];

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000/location', // Proxy base URL
  params: {
    key: LOCATIONIQ_KEY,
    format: 'json'
  }
});

const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;
  apiClient.get('https://us1.locationiq.com/v1/search.php', {
    params: { q: query }
  })
  .then((response) => {
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatitudeAndLongitude!', latitude, longitude);

    findLocation(latitude, longitude);
  })
  .catch((error) => {
    console.log('error in findLatitudeAndLongitude!', error.message);
  });
}

const findLocation = (latitude, longitude) => {
  apiClient.get('https://us1.locationiq.com/v1/reverse.php', {
    params: { lat: latitude, lon: longitude }
  })
  .then((response) => {
    console.log('success in findLocation!', response.data);
  })
  .catch((error) => {
    console.log('error in findLocation!', error.message);
  });
}

findLatitudeAndLongitude('Seattle, Washington, USA');