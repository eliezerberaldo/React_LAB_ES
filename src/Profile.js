export default function Profile() {
  const name = "Ada Lovelace";
  const avatar = "https://i.imgur.com/MK3eW3Am.jpg";
  const theme = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "rgba(0, 255, 0, 0.8)",
    padding: "10px",
    borderRadius: "10px",
    border: "2px solid rgba(0, 255, 0, 0.4)",
    boxShadow: "0 0 15px rgba(0, 255, 0, 0.4)",
  };

  function Avatar({ person = { name: "Alan" }, size = 100 }) {
    return <img src={avatar} alt={person.name} width={size} className="avatar" />;
  }

  function Card({ children }) {
    return <div className="card">{children}</div>;
  }

  const isOnline = true;
  const showWarning = false;
  let status;
  if (isOnline) {
    status = <p className="status online">✅ Ativo</p>;
  } else {
    status = <p className="status offline">❌ Inativo</p>;
  }

  const people = [
    { id: 1, name: "Lovelace", profession: "mathematician" },
    { id: 2, name: "Turing", profession: "chemist" },
  ];
  const chemists = people.filter(p => p.profession === "chemist");
  const listItems = chemists.map(p => (
    <li key={p.id} className="list-item">{p.name} - {p.profession}</li>
  ));

  function Recipe({ drinkers }) {
    return <p>{drinkers * 2} cups of water</p>;
  }

  return (
    <div style={theme} className="profile-container">
      <h1 className="profile-name">{name}'s Profile</h1>
      <Avatar person={{ name }} size={120} />
      <Card>
        <p>Meu texto!</p>
      </Card>
      {isOnline ? <p className="status online">✅ Ativo</p> : <p className="status offline">❌ Inativo</p>}
      {showWarning && <p className="warning">Aviso!</p>}
      {status}
      <ul className="list">{listItems}</ul>
      <Recipe drinkers={3} />
    </div>
  );
}
