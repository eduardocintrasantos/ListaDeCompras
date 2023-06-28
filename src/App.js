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
    <div className="add-form">
      <h3>Quais serão os itens da compra?</h3>
    </div>
  )
}

function PackingList() {
  return <div className="list">LISTA</div>;
}

function Stats() {
  return <footer className="stats">
    <em>
      Você tem x itens na sua lista, e já pegou x (X%)
    </em>
  </footer>
}