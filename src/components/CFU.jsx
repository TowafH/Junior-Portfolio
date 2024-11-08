import flowchart9 from '../assets/flowcharts/flow9.png'
import flowchart10 from '../assets/flowcharts/flow10.png'
import flowchartAdvanced from '../assets/flowcharts/advanced.png'
import flowchart11 from '../assets/flowcharts/flowchart11.png'
import flowchart12 from '../assets/flowcharts/flowchart12.png'


function CFU(){
  return(
  <>
        <div className='about-container'>

          {/* Container */}
          <div className='about-me'>
            <h1>CFU #1 - First Program</h1>
            <hr/>

            <p>In <b>CFU #1</b>, the code asks the user for their first and last names, combines them into a full name, and prints a greeting with the full name.</p>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_4VWCix6zN3958GQ.py"></iframe>
          </div>

          <div className='about-me'>
            <h1>CFU #2 - Concatenation Program</h1>
            <hr/>

            <p>In <b>CFU #2</b>, the code retrieves the current year, asks for the user's first name, last name, age, and soccer experience, then calculates the year they started playing soccer. Finally, it prints a message displaying the user's name, age, and soccer history.</p>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_G8bU0SqgT9oT7SL.py"></iframe>
          </div>

          <div className='about-me'>
            <h1>CFU #3 - Mathematical Operations</h1>
            <hr/>

            <p>In <b>CFU #3</b>, the code prompts the user to input two numbers and then displays the results of five basic arithmetic operations: addition, subtraction, multiplication, division, and modulus.</p>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_E3Sxb7ymt0sIbJU.py"></iframe>
          </div>

          <div className='about-me'>
            <h1>CFU #4 - Quadratic Formula</h1>
            <hr/>

            <p>In <b>CFU #4</b>, the code introduces a Quadratic Formula Calculator. It prompts the user for their name and the coefficients (a, b, and c) of a quadratic equation, then calculates and displays the two roots of the equation using the quadratic formula.</p>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_sXZKm4qYdrp6JOU.py"></iframe>
          </div>

          <div className='about-me'>
            <h1>CFU #5 - Canadian Conversions</h1>
            <hr/>

            <p>In <b>CFU #5</b>, the code helps a user calculate the total amount of money they have from various Canadian coins. After receiving the number of each coin type, it converts the values to cents, calculates the total amount in dollars and cents, and then breaks down the amount into whole dollars and the remaining change.</p>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_k0I4FhTbQrhUD9X.py"></iframe>
          </div>

          <div className='about-me'>
            <h1>CFU #6 - Advanced Mathemical Operations With Random</h1>
            <hr/>
            <p>In <b>CFU #6</b>, the code generates a random number and prompts the user to input their own number. It then performs various advanced and basic arithmetic operations</p>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_1rbZhjx9C4MVm5x.py"></iframe>
          </div>

          <div className='about-me'>
            <h1>CFU #7 - Functions</h1>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_vnCGxGlCfDVX2b6.py"></iframe>
            <p>In <b>CFU #7</b>, the code prompts the user to input three numbers and then sends those numbers to two separate functions. The first function calculates and prints the sum of the numbers, while the second function calculates and prints the average of the three numbers.</p>
          </div>

          <div className='about-me'>
            <h1>CFU #8 - GrubHub App</h1>
            <hr/>

            <p>In <b>CFU #8</b>, the code asks the user if they ordered delivery. If "yes," it requests the total cost and the number of people sharing the bill, then calculates and displays the cost per person. If the response is anything else, it asks who is cooking.</p>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_BZtw5CHyb7LuPfu.py"></iframe>
          </div>



            <div className='about-me'>
            <h1>CFU #9 - Rolling Dice</h1>
              <hr/>
            <div className='flow-chart-desc'>
              <div className='flow-chart-box'>
                <h1>CFU #9 - Flow Chart</h1>
                <img width="500px" height="300px" src={flowchart9}></img>
              </div>
              <p>In <b>CFU #9</b>, the user plays a guessing game where they are to guess randomly generated numbers between 1-6. The player chooses how many times they want to roll the dice and will earn or lose points for correct and incorrect rolls until they have no more rolls left.</p>
            </div>
            <hr/>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_GutzgqnKgF3RUGk.py"></iframe>
          </div>



            <div className='about-me'>
            <h1>CFU #10 - Rolling Dice</h1>
            <hr/>
          <div className='flow-chart-desc'>
            <div className='flow-chart-box'>
              <h1>CFU #10 - Flow Chart</h1>
              <img width="500" height="300px" src={flowchart10}></img>
            </div>
            <p>In <b>CFU #10</b>, the user plays a guessing game where the player attempts to guess the randomly generated number between 1-10 and know if their guess was too high or too low.</p>
          </div>
            <hr/>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_kSpOnSLhtyH87Sb.py"></iframe>
            <hr/>
          </div>



            <div className='about-me'>
            <h1>Advanced Group Challenge</h1>
            <hr/>            
          <div className='flow-chart-desc'>
            <div className='flow-chart-box'>
              <h1>Advanced Group Challenge - Flow Chart</h1>
              <img width="500px" height="300px" src={flowchartAdvanced}></img>
            </div>
            <p>In <b>Advanced Group Challenge</b>, I worked with a partner to create a number guessing game where the player selects the difficulty level, guesses a randomly generated number, tracks the number of attempts and total time taken, and ends after a correct guess or when rounds are exhausted.</p>
          </div>
            <hr/>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_tz2trtgYzsdaaub.py"></iframe>
          </div>



          <div className='about-me'>
            <h1>CFU #11 - For Loop Programs</h1>
            <hr/>
          <div className='flow-chart-desc'>
            <div className='flow-chart-box'>
              <h1>CFU #11 - Flow Chart</h1>
              <img width="500px" height="300px" src={flowchart11}></img>
            </div>
            <p>In <b>CFU #11</b>, I created a program with three functions, which prints numbers from 10 to 70 in steps of 10, prints numbers from 0 to 10 in increments of 0.5, and sings the "99 Bottles of Beer" song, with a prompt for the user to choose which function to run.</p>
          </div>
          <hr/>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_YG0eeYFq1ERt4d8.py"></iframe>
          </div>




          <div className='about-me'>
            <h1>CFU #12 - Password Program</h1>
            <hr/>
          <div className='flow-chart-desc'>
            <div className='flow-chart-box'>
            <h1>CFU #12 - Flow Chart</h1>
            <img width="500px" height="300px" src={flowchart12}></img>
            </div>
            <p>In <b>CFU #12</b>, this program allows user to pick one out of two versions for password entry. In Version 1, users are allowed unlimited attempts until the correct password "simonsnyc" is entered, while Version 2 restricts users to three attempts before access is denied.</p>
          </div>
          <hr/>
            <iframe frameborder="0" width="1000px" height="600px" 
              src="https://py3.codeskulptor.org/#user309_QkXO7akZBmVGciw.py"></iframe>
          </div>

        </div>
  </>
  )
}

export default CFU
