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
    res.setHeader('Content-type','text/plain');
    res.status(200).send('Received a POST through the new method!');
};


// ---------------------------------------------- //
// exports
// ---------------------------------------------- //

export default {
    renderHome,
    receivePost,
};