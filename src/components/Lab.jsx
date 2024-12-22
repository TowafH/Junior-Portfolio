

function Lab(props){
    return(
    <>
          <div className='about-container'>
  
            {/* Container */}
            <div className='about-me'>
              <h1>PS Assignment {props.num}: {props.name}</h1>
              <hr/>
              <p>{props.desc}</p>
              <iframe frameborder="0" width="1150px" height="600px" 
                src={props.py}></iframe>
            </div>

          </div>
    </>
    )
  }
  
  export default Lab