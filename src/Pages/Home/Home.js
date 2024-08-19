import React, { useEffect, useState } from 'react'
import './Home.css'
import 'semantic-ui-css/semantic.min.css';
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/footer/Footer'

function Home() {

    const [bitcoin, setArticles1] = useState([]);
    // Your API key
    const apikey = '8a0bdc6d006112ec4c9306ff42fb8a3e';
    const category = 'general';
    const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;

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
            <div><Header /></div>
            <div><Carousel /></div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md">
                        {
                            bitcoin.map((news, index) => {
                                return (
                                    <>
                                        <div className='row' key={index}>
                                            <h2 className="text-black">{news.title}</h2>
                                            <img src={news.image} alt={news.title} />
                                            <p></p>
                                            <p><b>publishedAt:</b> {news.publishedAt}</p>
                                            <p>{news.description}</p>
                                            <a href={news.url} target="_blank" rel="noopener noreferrer" className=" w-25 m-auto text-center p-2">
                                             <button class="ui inverted red button m-auto">Read More</button>
                                            </a>
                                        </div>
                                        <br></br>
                                        <hr></hr>
                                        <br></br>
                                    </>
                                )
                            })
                        }
                        

                    </div>
                    {/* <div className="col-md-4 bg-danger side-posts">
                        <div className='row'>.col-md-4</div>
                        <div className="row">.col-md-4</div>
                    </div> */}

                </div>

            </div>
            <div> <Footer /></div>
        </>
    )
}

export default Home