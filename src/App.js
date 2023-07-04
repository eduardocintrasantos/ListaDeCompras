const initialItems = [
  { id: 1, description: "Arroz", un: "Un", quantity: 2, packed: false },
  { id: 2, description: "Feijão", un: "Un",quantity: 2, packed: false },
  { id: 3, description: "Macarrão", un: "Un",quantity: 1, packed: true },
  { id: 4, description: "Carne", un: "Kg",quantity: 2, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  )
} 

function Logo() {
  return <h1>🍽 Lista de Compras</h1>
}

function Form() {
  return (
    <form className="add-form">
      <h3>Quais serão os itens da compra?</h3>
      <select>
        <option value={1} key={1}>1</option>
        <option value={2} key={2}>2</option>
        <option value={3} key={3}>3</option>
        <option value={4} key={4}>4</option>
        <option value={5} key={5}>5</option>
      </select>
      <select>
        <option value={"Un"}>Un</option>
        <option value={"Kg"}>Kg</option>
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  )
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {
          initialItems.map(item => <Item p={item} key={item.id}/>)
        }
      </ul>
    </div>
  );
}

function Item ({p}) {
  return ( 
    <li>
      <span style={p.packed ? {textDecoration:"line-through"} : {}}>
        {p.quantity}{p.un}, {p.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return <footer className="stats">
    <em>
      Você tem x itens na sua lista, e já pegou x (X%)
    </em>
  </footer>
}