async function getFormData() {
    
    // Basic logic to get data
    
    const data = [ 'arthur', '0000000000', '2006-02-03'];

    await console.log('Getting form data for generate diagnostic: \n', data);
    
    return data;
}

async function generateDiagnostic(data) {
    
    // Basic logic to generate a diagnostic based on the form data

    await console.log('Generating diagnostic for form data:\n', data);

    const diagnosticContent = "Com base nas informações prestadas, a melhor abordagem é criar uma holding.";
    
    return diagnosticContent;
}

module.exports = { getFormData,generateDiagnostic };