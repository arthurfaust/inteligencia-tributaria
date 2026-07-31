const diagnosticService = require('./diagnosticService');

exports.generateDiagnostic = async (req, res) => {
    const data = await diagnosticService.getFormData();
    
    const diagnosticContent = await diagnosticService.generateDiagnostic(data);

    res.render('diagnostic', { content: diagnosticContent });
}