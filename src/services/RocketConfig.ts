const config = {
    URL : "https://api.spacexdata.com/",
    VERSION: 'v4',
    RESOURCE: '/launches/'
}

const getURL = config.URL + config.VERSION + config.RESOURCE;

export { getURL };