const layoutData = require('./mockLayoutData.json'); //naturally this data goes from backend

module.exports = async () => {
    const fs = require("fs");

    const getLayout = async () => {
        const endpoint = 'https://jsonplaceholder.typicode.com/posts'; //imitates REST API request for layout schema
        const options = {}
        try {
            const response = await fetch(endpoint, options)
            const content = layoutData //response.json()
            return {
                data: content,
                status: response.status,
                request: endpoint,
                options: options
            }
        } catch (e) {
            return {
                status: 500,
                request: endpoint,
                options: options,
                error: e
            }
        }
    }


    // fetch from wherever you've stored the layout
    const layout = await getLayout();
    // save the result the public folder
    fs.writeFileSync('public/layout.json', JSON.stringify(layout));
};


