import Profile from "./Profile";
import { Link } from "react-router-dom";
import './Profile.css'; 

export default function Atv03() {
    return (
    <div className="container">
        <h1 className="title">Atividade 3</h1>
        <Profile />
        <Link to="/" className="link">Voltar ao terminal principal</Link>
    </div>
  );
}
