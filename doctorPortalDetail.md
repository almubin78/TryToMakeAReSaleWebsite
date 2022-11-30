# verifyJWT
```
function verifyJWT(req, res, next) {

    const authHeader = req.headers.authorization;
    console.log('authHeader', authHeader);
    if (!authHeader) {
        return res.status(401).send('unauthorized access'); //ekhane message nai keno
    }

    const token = authHeader.split(' ')[1];
    console.log('token', token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'forbidden access' })
        }
        req.decoded = decoded;
        next();
    })

}
```
# VerifyAdmin
```
const verifyAdmin = async (req, res, next) => {
    const decodedEmail = req.decoded.email;
    const query = { email: decodedEmail };
    const user = await usersCollection.findOne(query);
        if (user?.role !== 'admin') {
            return res.status(403).send({ message: 'forbidden access' })
        }
    next();
}
```
```
app.get('/bookings', verifyJWT, async (req, res) => {
        const email = req.query.email;
        const decodedEmail = req.decoded.email;
            if (email !== decodedEmail) {
                    return res.status(403).send({ message: 'forbidden access' });
                }
        const query = { email: email };
        const bookings = await bookingsCollection.find(query).toArray();
        res.send(bookings);
    });
```