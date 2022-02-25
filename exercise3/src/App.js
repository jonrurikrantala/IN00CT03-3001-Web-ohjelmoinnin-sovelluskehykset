import './App.css';
import data from './data.json'
import Search from './components/Search'
import ProductList from './components/ProductList'
import { useState } from 'react'

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(data.products);
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  }
  
  return (
    <div className="App">
      <Search searchValue={searchTerm} onSearchChange={handleSearchChange}/>
      <ProductList products={products} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;