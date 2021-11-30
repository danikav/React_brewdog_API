const BeerSelector = ({onSelectedBeerIncrement, onSelectedBeerDecrement}) => {
    
    return(
        <>
        <div class="text-center space-x-3">
        <button class="border-gray-500 border-2 rounded-lg mt-10 bg-gray-200" onClick={onSelectedBeerDecrement}>Previous Beer</button>
        <button class="border-gray-500 border-2 rounded-lg mt-10 bg-gray-200" onClick={onSelectedBeerIncrement}>Next Beer</button>
        </div>
        </>
    );
}

export default BeerSelector;