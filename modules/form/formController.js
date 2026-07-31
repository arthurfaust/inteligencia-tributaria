exports.getForm = (req, res) => {
    res.render('formulario', { title: 'Formulário' });
}

exports.submitForm = (req, res) => {
    const data = req.body;
    res.json({
        message: 'Formulário recebido com sucesso!',
        data: data
    });
}