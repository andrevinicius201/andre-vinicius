export default function Card(props){
    return (
        <div className="card">
            <img 
                className="card--image" 
                src={props.imgPath}
            />
            <p className="card--title">{props.description}</p>
        </div>     
    )
}