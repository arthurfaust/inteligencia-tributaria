const formService = require('./formService');
const formValidator = require('./formValidator');

exports.renderForm = (req, res) => {
    res.render('form');
}

exports.submitForm = async (req, res) => {
    const data = req.body;
    
    try {
        const isValid = await formValidator.validateForm(data);

        if (!isValid) {
            return res.status(400).send('Invalid form data');
        }

        await formService.persistForm(data);

        res.redirect('/diagnostic');
    } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).send('Internal Server Error');
    }
}