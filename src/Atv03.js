import {Link} from "react-router-dom";
import {Profile} from "./Gallery.js";
import TodoList from "./TodoList.js";
import Card from "./Profile.js";
import PackingList from "./PackingList.js";
import List from "./List.js";
import TeaSet from "./TeaSet.js";
import TeaGathering from "./TeaGathering.js";

export default function Atividade03()
{
    return(
        <div>
            <h1>Atividade 03</h1>
            <Profile/>
            <Card/>
            <TodoList/>
            <PackingList/>
            <List/>
            <TeaSet/>
            <TeaGathering/>
            <Link to="/">Voltar</Link>
        </div>
        );
}