

const FirstComponent = () =>{
    const nome = "Paloma";
    const sobrenome = "Rodrigues de Souza";
    const matricula = "2324290078";
    const professor = "Felipe Batista";
    const disciplina = "Construção de FrontEnd";

    return (
        <div>
            <p>Nome Completo: {nome} {sobrenome} - Matrícula: {matricula}</p>
            <p>Professor: {professor} - Disciplina: {disciplina}</p>
        </div>
    );
}

export default FirstComponent;