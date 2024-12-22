function CFU(props){
  return(
  <>
        <div className='about-container'>

        <div className='about-me'>
          
            <h1>CFU {props.num} - {props.name}</h1>
            <hr/>

            {props.flow ? (
            <>
              <div className='flow-chart-desc'>
                <div className='flow-chart-box'>
                  <h1>CFU {props.num} - Flow Chart</h1>
                  <img width="500px" height="300px" src={props.flow}></img>
                </div>
                <p>{props.desc}</p>
              </div>
            <hr/>
            </>
            ) : <p>{props.desc}</p>}
            <iframe frameBorder="0" width="1150px" height="600px" 
              src={props.py}></iframe>
          </div>

        </div>
  </>
  )
}

export default CFU