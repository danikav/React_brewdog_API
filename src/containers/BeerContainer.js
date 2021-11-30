import { useState, useEffect } from 'react';
import { useWindupString } from "windups";
import BeerDetails from '../components/BeerDetails';
import BeerSelector from '../components/BeerSelector';
import SearchBar from '../components/SearchBar';

const BeerContainer = () => {

    const [beer, setBeer] = useState({});
    const [selectedBeerId, setSelectedBeerId] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const [input, setInput] = useState('');

    useEffect(() => {
      getBeer();
    }, []);

    useEffect(() => {
        getBeer();
    }, [selectedBeerId]);

    const incrementSelectedBeerId = () => {
        if (selectedBeerId >= 326) {
            return;
        }
        setSelectedBeerId(selectedBeerId + 1);
    };

    const decrementSelectedBeerId = () => {
        if (selectedBeerId <= 1) {
            return;
        }
        setSelectedBeerId(selectedBeerId - 1);
    };


    const getBeer= async () => {
        try{
            const response = await fetch(`https://api.punkapi.com/v2/beers/${selectedBeerId}`);
            const data = await response.json();
            await setBeer(data);
            await setLoaded(true);
        }
    catch (error) {
        console.log(error);
        }   
    };

    const [text] = useWindupString("Welcome beer lover! Please enjoy browsing our range of beers...", {
        pace: (char) => (char === " " ? 400 : 40),
      });

      const updateInput = async (input) => {
        const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${input}`)
        const data = await response.json();
        await setBeer(data);
        await setInput(input)};
    
    return(
        <>
        <div class="bg-blue-background ... h-screen bg-cover">
        <h1 class="text-6xl ">Brewdog's Famous Beers</h1>
        <p class="ml-6 mt-6">
            {text}
        </p>
        <SearchBar 
        input={input} 
        updateInput={updateInput}
        />
        <BeerSelector 
            onSelectedBeerIncrement={incrementSelectedBeerId}
            onSelectedBeerDecrement ={decrementSelectedBeerId} 
            />
        <BeerDetails beer={beer} loaded={loaded}/>
        </div>
        </>
    );
}

export default BeerContainer;