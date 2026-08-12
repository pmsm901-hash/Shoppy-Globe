import { setSearch } from "../redux/productSlice";
import { selectSearch } from "../redux/productSelectors";
import { useDispatch, useSelector } from "react-redux";
import "./Searchbar.css";
function Searchbar()
{
    const dispatch=useDispatch();
    const search=useSelector(selectSearch);
    function handleSearch(e)
    {
        dispatch(setSearch(e.target.value));
    }

    return(
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search Products....." value={search} onChange={handleSearch}/>
    </div>);
}
export default Searchbar;