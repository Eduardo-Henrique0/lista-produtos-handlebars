exports.index = (req, res) => {
  const produtos = [
    { nome: 'Notebook Lenovo', preco: 3500, promocao: true },
    { nome: 'Mouse Logitech', preco: 120, promocao: false },
    { nome: 'Teclado Mecânico', preco: 450, promocao: false },
    { nome: 'Monitor LG 27"', preco: 999, promocao: true }
  ];
  res.render('home', { titulo: 'Lista de Produtos', produtos });
};
