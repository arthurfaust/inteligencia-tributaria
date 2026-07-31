async function persistForm(data) {
    
    // Logic to persist the form data into a database

    await console.log('Persisting form data:\n', data);
}

async function validateForm(data) {
    
    //logic to validate the form data
    
    await console.log('Validating form data:\n', data);
    
    return true;
}

module.exports = { persistForm, validateForm };