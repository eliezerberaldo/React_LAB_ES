import Toolbar from "./Toolbar";
import "./Toolbar.css";
import Gallery from "./Gallery";
import "./Gallery.css";
import Counter from "./Counter";
import "./Counter.css";
import Form from "./Form";
import "./Form.css";
import MovingDot from "./MovingDot";
import "./movingDot.css";
import Form2 from "./Form2";
import "./Form2.css";
import Form3 from "./Form3";
import List1 from "./List1";
import List2 from "./List2";
import List3 from "./List3";
import List4 from "./List4";
import "./List.css";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import "./CounterList.css";

import BucketList from "./BucketList";
import "./BucketList.css";

import { Link } from "react-router-dom";

export default function Atv04() {
    return(

         <>
            <h1>Atividade 04</h1>
            <Toolbar />
            <Gallery />
            <Counter />
            <Form />
            <MovingDot />
            <Form2 />
            <Form3 />
            <List1 />
            <List2 />
            <List3 />
            <List4 />
            <ShapeEditor />
            <CounterList />
            <BucketList />
            <Link to="/" className="link">Voltar Ao Terminal Principal</Link>
        </> 
        
    );
}
