const Filho = ({altura, peso}) => {
    
    let imc = peso/ (altura * altura);

    function imcCasos(imc){
        if(imc < 18) return <h3>Abaixo do Peso</h3>;
        else if(imc >= 18 && imc <= 25) return <h3>Peso Ideal</h3>;
        else return <h3>Acima do Peso</h3>;
    }
    return(
        <>
        <h3>Altura: {altura}</h3>
        <hr />
        <h3>Peso: {peso}</h3>
        <hr />
        <h3>Imc: {imc} {imcCasos(imc)}</h3>
        <hr />

        </>
    )
}

export default Filho