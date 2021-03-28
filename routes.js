let lista = [];
let d_lista = (req,res) => {
    lista.push(Math.round(Math.random() * 100))
    res.send(`U listi se dodaju: ${lista}`)
}
let p_lista = (req,res) => res.send(`Lista je ${lista}`)


export default { d_lista, p_lista } 
