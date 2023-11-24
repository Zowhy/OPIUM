import { useParams } from "react-router-dom";
import Card from "../Componentes/card";

export default function Detalhe(){

    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("lista") );

    const atividade = lista.filter((cads) => {
        if (cads.id == id){
            return cads;
        }
        return null;
    })
    console.log(atividade);
    return(
        <Card produto={atividade[0]}/>
    );
}