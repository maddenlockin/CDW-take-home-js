import './App.css';
import Search from './Components/Search';
import List from './Components/List';
import { useEffect, useState } from 'react';
import { getAllURLs } from './utils/fetch-utils';

function App() {
  const [list, setList] = useState([]);

  async function fetchList() {
    const listRes = await getAllURLs();
    setList(listRes);
  }
  
  useEffect(() => {
    fetchList();
  }, [])
  
  return (
    <div className="App">
      <Search fetchList={fetchList} />
      <List list={list} />
    </div>
  );
}

export default App;
