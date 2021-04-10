import Menu from '../components/menu/Menu'
import {useState, useEffect, lazy, Suspense} from 'react'
const Logs= lazy(()=>import('../components/logs/Logs'))
const Home=()=>{

    const [dados, setDados]=useState([]);
    useEffect(()=>{

        // Importando dados do bd e colocando o array na constante
        async function carregaDados(){
            const url= 'http://localhost:5000/';
            const resposta= await fetch(url);
            const resultado= await resposta.json();
            setDados(resultado);
        }
        carregaDados()
    }, [])
    
    return(
        <>
    <Menu/>
    <Suspense fallback={<h2 className='lazy'>Carregando dados...</h2>}>
    <table className='table table-bordered table-hover'>
            <thead className="thead-light">
            <tr>
                <td scope="col">Dia</td>
                <td scope="col">Mês</td>
                <td scope="col">Ano</td>
                <td scope="col">Hora</td>
                <td scope="col">Mensagem</td>
            </tr>
            </thead>
            <tbody> 
            {/* Realizando um map para exibir os dados através do componente Logs*/}
            {dados && dados.map( dados=><Logs key={dados._id} month={dados.month} year={dados.year} day={dados.day} hour={dados.hour} msg={dados.msg}/>) }
            </tbody>
        </table>
        </Suspense>
        </>
    )
}

export default Home;