const PlacaMae=({nome, preco})=>{
    return(
        <>
        <h3>Nome: {nome}</h3>
        <h3>Preço: {preco}</h3>
        </>
    )
}

const Memoria=({nome, preco})=>{
    return(
        <>
        <h3>Nome: {nome}</h3>
        <h3>Preço: {preco}</h3>
        </>
    )
}

const PlacaDeVideo=({nome, preco})=>{
    return(
        <>
        <h3>Nome: {nome}</h3>
        <h3>Preço: {preco}</h3>
        </>
    )
}

const MeuPc=() =>{
    return(
        <>
        <PlacaMae nome="Placa Mãe 01" preco={600}/>
        <Memoria nome="Memoria 02" preco={300}/>
        <PlacaDeVideo nome="Placa de Vieo 03" preco={1000}/>
        </>
    )
}

export default MeuPc;