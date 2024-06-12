import './SearchBar.css'
import search from '../../static/search_icon.svg'

export default function SearchBar() {
    return <div className="search_container">
        <img src={search} alt='search' className="search_img"/>
        <input placeholder="Поиск" className="search_input"/>
    </div>

}