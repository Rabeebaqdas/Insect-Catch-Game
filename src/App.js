import './App.css';
import React,{useRef,useEffect,useState} from 'react';




function App() {
    const [response,setRes] = useState()
    const [val,setVal] = useState('')
    const [Loading,setLoading] = useState(false);

    useEffect(()=>{

        const getData = async () =>{
            setLoading(true)
            const data = await fetch('https://randomuser.me/api?results=50');
            const res = await data.json()
            setRes(res.results)
            setLoading(false)
           
        }
        getData()

    },[])

    const handleSearch = () => {
        return response?.filter((res) =>
                res.name.first.toLowerCase().includes(val.toLowerCase()) ||
                res.location.city.toLowerCase().includes(val.toLowerCase()) ||
                res.location.country.toLowerCase().includes(val.toLowerCase())


        );
    };
  
  return (
    
    <div className="container">
       
    <header className="header">
        <h4 className="title">Live User Filter</h4>
        <small className="subtitle">Search by name, city or country</small>
        <input type="text" id="filter" placeholder="Search" value={val} onChange={(e)=>setVal(e.target.value)} />
    </header>

    <ul id="result" className="user-list">

        { Loading ?
         <li>
         <h3>Loading...</h3>
     </li>
     :
            handleSearch()?.map((e)=>(
                <li>
                    <img src={e.picture.large} alt="img"></img>
                    <div className='user-info'>
                            <h4>{e?.name?.first} {e?.name?.last}</h4>
                            <p>{e?.location?.city}, {e?.location?.country}</p>
    
                    </div>
                </li>
            )) 
        }
        
    </ul>
</div>

  )
}

export default App;
