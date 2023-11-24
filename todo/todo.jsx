import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./todo.css";


export default function Todo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("lista")) || [];
    const [lista, setLista] = useState(listaLocalStorage);


    const [atividade, setAtividade] = useState("");
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.lenght - 1]?.id + 1 || 1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    useEffect(() => {localStorage.setItem("Listas", JSON.stringify(lista))},[lista]);

    //função salvar//
    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            name: name,
            email: email,
            password: password
        }]);

        setId(id + 1);
        setAtividade("");

    };

 //função remover//
    const remover = (id) => {
        const listFilter = [];
        lista.map((list) => {
            if (list.id !== id) {
                listFilter.push(list);
            }
        });
        
        setLista(listFilter);
    }
     //Função Renderização do Componente//
    return (
        <div class="container">
            <Link to="/">home</Link>
            <h1>Enter Your Data</h1>
      <p>"you cannot put characters in the password"</p>
            <form onSubmit={salvar}>

                <h4><i>Name</i></h4>  
                <input type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
               
          
      
<h4><i>Email</i></h4>
            <input type="text"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />

<h4><i>Password</i></h4>
                       <input type="text"
                    value={password}
                    onChange={(e) => { setPass(e.target.value) }} />
<br></br>
<br></br>
                <button>ADD</button>
            </form>

            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <Link to={`=/detalhe/${ativ.id}`}>    
                    <li>{ativ.todo}</li>
                    </Link>
                    <button onClick={() =>
                    remover(ativ.id)}>
                        Remove                   
                    </button>
                        <p>Name: {ativ.name}</p>
                        <p>Email: {ativ.email}</p>
                        <p>Password: {ativ.password}</p>
                        <button onClick={() => remover(ativ.id)}>Remove</button>
                        </ul>
              
            )}
        </div>
);
}

