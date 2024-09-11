

const SecondComponent = () => {
  const items = [
    { id: 1, name: "Paloma", matricula: 2324290078 },
    { id: 2, name: "Fulano", matricula: 2324290079 },
    { id: 3, name: "Ciclano", matricula: 2324290080 },
    { id: 4, name: "Beltrano", matricula: 2324290081 },
    { id: 5, name: "Maximiliano", matricula: 2324290082 },
  ];

  // Ordenação por ID
  const ordenadorID = items.map((item) => (
    <li key={item.id}>{item.name} - Matrícula: {item.matricula}</li>
  ));

  // Ordenação por Nome (alfabética)
  const ordenadorNome = items
    .slice() // Para não alterar o array original
    .sort((a, b) => a.name.localeCompare(b.name)) // Comparação pelo campo "name"
    .map((item) => (
      <li key={item.id}>{item.name} - Matrícula: {item.matricula}</li>
    ));

  return (
    <div>
      <h3>Itens ordenados por ID:</h3>
      <ol>{ordenadorID}</ol>

      <h3>Itens ordenados por Nome:</h3>
      <ol>{ordenadorNome}</ol>
    </div>
  );
};

export default SecondComponent;
