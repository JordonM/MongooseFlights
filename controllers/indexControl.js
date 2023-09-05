function indexNew(req, res) {
    console.log('The Home route has been hit');
    res.render('layout');
}

// Export Modules
module.exports = {
    index: indexNew
};