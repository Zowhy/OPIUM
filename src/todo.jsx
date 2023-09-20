import { useState } from "react";
import { Link } from "react-router-dom";
import "./todo.css";

export default function Todo() {
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

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

    