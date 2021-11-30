import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BeerDetails = ({beer, loaded}) => {

    if (!loaded) {
        return (
            <p>Loading...</p>
        );
        }

        

    return(
        <>
        <div class="text-center flex flex-col ... flex items-center justify-center">
        <h2 class="text-blue-800 text-4xl mt-14 mb-2 font-bold">
            {beer[0].name}
        </h2>
        <h4 class="mb-6">
            {beer[0].tagline}
        </h4>
        <Popup trigger={<img class="w-30 h-80 animate-pulse cursor-pointer" src={beer[0].image_url} />} position="right center">
        <div>{beer[0].description}</div>
        </Popup>
        </div>
        </>
    );
}

export default BeerDetails;