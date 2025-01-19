function Project(props){
    return(
        <>
        <div className='about-container'>

        <div className='about-me'>
          
            <h1>{props.name}</h1>
            <hr/>

            {props.wire ? (
            <>
              <div className='flow-chart-desc'>
                <div className='flow-chart-box'>
                  <h1>{props.name} - Wireframe</h1>
                  <img width="500px" height="300px" src={props.wire}></img>
                </div>
                <p>{props.desc}</p>
              </div>
            <hr/>
            </>
            ) : <p>{props.desc}</p>}
            <iframe frameBorder="0" width="1150px" height="900px" 
              src={props.py}></iframe>
          </div>

        </div>
  </>
    )
}

export default Project