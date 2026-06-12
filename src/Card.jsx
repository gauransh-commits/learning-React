import profielPic from './assets/exploding-blocks.jpg'

function Card(){
    return(
        <div className="card">
            <img className="cardImage" src= {profielPic} alt="profile picture" />
            <h2 className="card-title">Gauransh Sharma</h2>
            <p className="card-text">I am studying Computer Science and i like singing</p>
        </div>
    );
}

export default Card