import "./index.css"

const DestinationItem = props => {
    const {destinationItem} = props
    const {name, imgUrl} = destinationItem

    return (
        <li>
            <div className="destination-item-container">
                <img src={imgUrl} alt={name} className="image" />
                <p className="place">{name}</p>
            </div>
        </li>
    )
}

export default DestinationItem