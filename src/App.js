import { useState , useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import SerachBox from './components/search-box/search-box.component';

import './App.css';

const App = () =>{
  const [searchField,setSearchField]=useState('');
  const [monsters,setMonsters]=useState([]);
  const [title,setTitle]=useState('');

  const [filterdMonsters,setfilterdMonsters]=useState(monsters);
  const  onSerachChange=(event)=>{
  const searchFieldString=event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
  }
  const  onTitleChange=(event)=>{
    const searchFieldString=event.target.value.toLocaleLowerCase()
          setTitle(searchFieldString)
    }

  const filterdMonster=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>{ setMonsters(users);})
  },[]);
  useEffect(()=>{
    const newFilterdMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setfilterdMonsters(newFilterdMonsters)
  },[monsters,searchField])

  return(
    <div className="App">
        <h1 className='app-title'>{title}</h1>
        <SerachBox onChangeHandler={onSerachChange}  placeholder='Search monster'  className='serach-box-monsters'/> <br/>
        <SerachBox onChangeHandler={onTitleChange}  placeholder='set title'  className='serach-box-title'/>

        <CardList monsters={filterdMonster} />

        </div>
  )
}

export default App;
