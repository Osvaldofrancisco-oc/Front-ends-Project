function Titulo({nome}){
    
    return(
        <>
        <h1>Eu sou um {nome ? nome: "Fulano"}</h1>
   
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores sit aliquam itaque nisi, incidunt ex accusantium exercitationem maiores et facilis esse voluptatibus laboriosam inventore. Similique iusto nesciunt nulla necessitatibus!</p>
        </>
    )
}

export default Titulo