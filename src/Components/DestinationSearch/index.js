import {Component} from "react"
import DestinationItem from "../DestinationItem/index.js"
import "./index.css"

class DestinationSearch extends Component {
    state = {searchInput: ""}

    searchInputOnclicking = (event) =>{
        this.setState({searchInput: event.target.value})
    }

    render(){
        const {destinationsList} = this.props

        const {searchInput} = this.state 
        const searchresults = destinationsList.filter(eachItem => (
            eachItem.name.toLowerCase().includes(searchInput.toLowerCase())
        ))
        return (
            <div className="app-container">
                <div className="destinations-container">
                    <h1 classname="heading">Destination Search</h1>
                    <div className="search-container">
                        <input type="search" 
                            className="search-input" 
                            placeholder="Search" 
                            onChange={this.searchInputOnclicking}
                        />
                        <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                        alt="searchIcon" className="search-icon"
                        />
                    </div>
                    <ul>
                        {searchresults.map(eachDestination => (
                            <DestinationItem destinationItem={eachDestination} key={eachDestination.id} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DestinationSearch