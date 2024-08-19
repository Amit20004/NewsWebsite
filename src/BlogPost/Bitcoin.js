import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import './Bitcoin.css'


function Bitcoin() {
    

    const [bitcoin, setArticles1] = useState([]);
    // const [loading, setLoading] = useState(true);
    // Your API key
    const apiKey = '01213c1ff17d49429f9b15ca3cc44e84';
    const [search, setSearch] = useState("");
    const query = 'bitcoin';
    const pageSize = 20; // Limit the number of articles to 5

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&pageSize=${pageSize}`;


    // Fetch data from NewsAPI when the component mounts
    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Store the fetched data in the state
                console.log(data)
                setArticles1(data.articles);
            })
            .catch(error => {
                // Log any errors that occur during the fetch
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array means this effect runs only once after the initial render
    
    const [coins, setCoins] = useState(0);
    const [coinsAdded, setCoinsAdded] = useState(false);
  
    useEffect(() => {
      // Retrieve coins from local storage on component mount
      const savedCoins = localStorage.getItem(`userWallet`);
      if (savedCoins) {
        setCoins(parseInt(savedCoins));
      }
  
      // Start a timer to add coins after 30 seconds
      const timerId = setTimeout(() => {
        const newCoins = coins + 10; // Add 10 coins or any value you prefer
        setCoins(newCoins);
        setCoinsAdded(true);
  
        // Save the updated coins in local storage
        localStorage.setItem(`userWallet`, newCoins);
      }, 60000); // 60 seconds
  
      // Cleanup the timer if the user navigates away or the component unmounts
      return () => {
        clearTimeout(timerId);
      };
    }, [coins]);
  

    return (
        <>
            <Header />
            <div className='container {style.row}'>
                <div className='row '>
                    <form className="d-none d-lg-flex" style={{ padding: "0 10px" }} role="search" id="search-form" onSubmit={(e) => e.preventDefault()}>
                        <input className="form-control me-2 w-25" type="search" placeholder="Search posts by name here..." aria-label="Search" id="search post here" onChange={(e) => setSearch(e.target.value)} />
                    </form>
                </div>
                <div className="row">
                    <h1 className="text-center">BitCoins</h1>
                    {
                        bitcoin.filter((item)=>{
                            return item.title.toLowerCase().includes(search.toLowerCase())
                        }).map((news, index) => (
                            <div key={news.id || index} className="col-md-4">
                                <h2 className="text-black">{news.title}</h2>
                                <img src={news.urlToImage} alt={news.title} />
                                <p><b>publishedAt:</b> {news.publishedAt}</p>
                                <p>{news.description}</p>
                                <a href={news.url} target="_blank" rel="noopener noreferrer" className="bg-danger">Read More</a>
                            </div>
                        ))
                    }
                </div>
            </div>a

            <Footer />

        </>
    )
}

export default Bitcoin