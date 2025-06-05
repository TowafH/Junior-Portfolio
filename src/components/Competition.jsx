function Competition(props){
    return(
        <>
        <div className='about-container'>

        <div className='about-me'>
          
            <h1>{props.name}</h1>
            <hr/>
            <iframe frameBorder="0" width="1150px" height="900px" 
              src={props.web}></iframe>
          </div>

        </div>
  </>
    )
}

export default Competition