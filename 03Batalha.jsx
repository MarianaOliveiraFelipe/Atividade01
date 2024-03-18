import React from 'react';

const Hero = ({name, imagemUrl}) =>{
    return(
        <>
        <h3>Nome: {name}</h3>
        <img src={imagemUrl} alt="Hero" width={200} />
        </>
    )
}

const Enemy = ({name, imagemUrl}) =>{
    return(
        <>
        <h3>Nome: {name}</h3>
        <img src={imagemUrl} alt="Hero" width={200} />
        </>
    )
}

const Arena = ({arena}) =>{

    const heroImagemURL = "https://i.pinimg.com/564x/5f/3b/30/5f3b30949f15610299d61cd093eee797.jpg";
    const enemyImagemURL = "https://i.pinimg.com/564x/a7/27/b8/a727b86f0b69e40babf9d88059b33be6.jpg";

    return(
        <>
        <h2>Arena: {arena}</h2>
            <Hero name="Batman" imagemUrl={heroImagemURL} />
            <Enemy name="Coringa" imagemUrl={enemyImagemURL} />
        </>
    )
}

const World = ({ children }) => {
    return (
      <div>
        {children}
      </div>
    );
  }

export {Hero, Enemy, Arena, World}