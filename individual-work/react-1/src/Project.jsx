
const Project=(props) => {
    return (
      <div className="project">
            <div>
            
            <img height="250px" src={props.img}/>
            </div>
          
          <h3>{props.title}</h3>
          <p>
            {props.content}
          </p>
        </div>
    )
  }

export default Project;