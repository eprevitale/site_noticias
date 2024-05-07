// ---------------------------------------------- //
// Render Home
// ---------------------------------------------- //

const renderHome = (req, res) => {
    res.render("home.html");
};


// ---------------------------------------------- //
// Receive Post
// ---------------------------------------------- //

const receivePost = (req,res) => {

    const data = req.body;
    console.log(data);

    function promise() {
        return new Promise( (resolve,reject) => {

            setTimeout( () => {
                if(data.resolve == true) {
                    resolve("Resolved");
                } else {
                    reject(new Error("Rejected"));
                }
            }, 3000 );

        });
    }

    try {
        promise();
    } catch (error) {
        console.log(error);
    }

    const teste = { "received": true };
    const json = JSON.stringify(teste);

    res.setHeader('Content-type','text/plain');
    res.status(200).send(json);
};


// ---------------------------------------------- //
// exports
// ---------------------------------------------- //

export default {
    renderHome,
    receivePost,
};