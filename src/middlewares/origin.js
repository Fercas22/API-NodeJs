const checkSession = (req, res, next) => {
    const headerAuth = req.headers.authorization || '';
    // console.log(req);
    //TODO Bearer
    const token = headerAuth.split(' ').pop(); //1111
    if (!token) {
        res.status(405);
        res.send({error: 'No tienes token'});
    } else {
        next();
    }
};

module.exports = {checkSession};