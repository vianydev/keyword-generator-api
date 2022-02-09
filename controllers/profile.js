const handleProfile = (req, res) => {
    const { id } = req.params;
    db('users').where('id', id)
    .then(user => {
        if(user.length){
            res.json(user[0])    
        } else {
            res.status(400).json('not found');
        }
    })
    .catch(error => res.status(400).json('unable to find user'))
}

module.exports = {
    handleProfile
}