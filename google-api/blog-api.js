const { google } = require('googleapis');

// Each API may support multiple version. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
const blogger = google.blogger({
    version: 'v3',
    auth: 'AIzaSyDDfbaCJ8601TIM46EHuO9UfRmHUI18vl0'
});

const params = {
    blogId: '3213900'
};

// get the blog details
blogger.blogs.get(params)
    .then(res => {
        console.log(`The blog url is ${res.data.url}`);
    })
    .catch(error => {
        console.error(error);
    });