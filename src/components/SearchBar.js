const SearchBar = ({input,updateInput}) => {


  return (
    <input 
     class="w-50 p-1 rounded-lg absolute top-0 right-0"
     value={input}
     placeholder={"Search Beers"}
     onChange={(e) => updateInput(e.target.value)}
    />
  );
}

export default SearchBar