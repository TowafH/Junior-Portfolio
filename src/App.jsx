import './App.css'
import { useEffect } from 'react'

//Imports
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import CFU from './components/CFU.jsx'
import Lab from './components/Lab.jsx'
import Project from './components/Project.jsx'
import InfyApp from './components/InfyApp.jsx'
import Competition from './components/Competition.jsx'
import Certification from './components/Certification.jsx'
import About from './components/About.jsx'
//import EarSketch from './components/EarSketch.jsx'

// NavBar
import { Route, Routes, useNavigate } from 'react-router-dom';

//Images 4 CFU
import flowchart9 from './assets/flowcharts/flow9.png'
import flowchart10 from './assets/flowcharts/flow10.png'
import flowchartAdvanced from './assets/flowcharts/advanced.png'
import flowchart11 from './assets/flowcharts/flowchart11.png'
import flowchart12 from './assets/flowcharts/flowchart12.png'

//Images 4 Projects
import empires from './assets/wireframes/empires.png'


function RedirectToHome() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/Home');
  }, [navigate]);

  return null;
}

function App() {

return (
  <>
  <div>
    <nav>
      <Header />
      <Routes>
        <Route path="/" element={<RedirectToHome />} />
          <Route path='/Home' element={<Home />} />

          <Route path='/CFU' element={
          <>
            <CFU 
            num="#1"
            name="First Program"
            desc={<>In <b>CFU #1</b>, the code asks the user for their first and last names, combines them into a full name, and prints a greeting with the full name.</>}
            py="https://py3.codeskulptor.org/#user309_4VWCix6zN3958GQ.py"
            />
            <CFU 
            num="#2"
            name="Concatenation Program"
            desc={<>In <b>CFU #2</b>, the code retrieves the current year, asks for the user's first name, last name, age, and soccer experience, then calculates the year they started playing soccer. Finally, it prints a message displaying the user's name, age, and soccer history.</>}
            py="https://py3.codeskulptor.org/#user309_G8bU0SqgT9oT7SL.py"
            />
            <CFU 
            num="#3"
            name="Mathematical Operations"
            desc={<>In <b>CFU #3</b>, the code prompts the user to input two numbers and then displays the results of five basic arithmetic operations: addition, subtraction, multiplication, division, and modulus.</>}
            py="https://py3.codeskulptor.org/#user309_E3Sxb7ymt0sIbJU.py"
            />
            <CFU 
            num="#4"
            name="Quadratic Formula"
            desc={<>In <b>CFU #4</b>, the code introduces a Quadratic Formula Calculator. It prompts the user for their name and the coefficients (a, b, and c) of a quadratic equation, then calculates and displays the two roots of the equation using the quadratic formula.</>}
            py="https://py3.codeskulptor.org/#user309_sXZKm4qYdrp6JOU.py"
            />
            <CFU 
            num="#5"
            name="Canadian Conversions"
            desc={<>In <b>CFU #5</b>,  the code helps a user calculate the total amount of money they have from various Canadian coins. After receiving the number of each coin type, it converts the values to cents, calculates the total amount in dollars and cents, and then breaks down the amount into whole dollars and the remaining change.</>}
            py="https://py3.codeskulptor.org/#user309_k0I4FhTbQrhUD9X.py"
            />
            <CFU 
            num="#6"
            name="Advanced Mathemical Operations With Random"
            desc={<>In <b>CFU #6</b>, the code generates a random number and prompts the user to input their own number. It then performs various advanced and basic arithmetic operations</>}
            py="https://py3.codeskulptor.org/#user309_1rbZhjx9C4MVm5x.py"
            />
            <CFU 
            num="#7"
            name="Functions"
            desc={<>In <b>CFU #7</b>, the code prompts the user to input three numbers and then sends those numbers to two separate functions. The first function calculates and prints the sum of the numbers, while the second function calculates and prints the average of the three numbers.</>}
            py="https://py3.codeskulptor.org/#user309_vnCGxGlCfDVX2b6.py"
            />
            <CFU 
            num="#8"
            name="GrubHub App"
            desc={<>In <b>CFU #8</b>, the code asks the user if they ordered delivery. If "yes," it requests the total cost and the number of people sharing the bill, then calculates and displays the cost per person. If the response is anything else, it asks who is cooking.</>}
            py="https://py3.codeskulptor.org/#user309_BZtw5CHyb7LuPfu.py"
            />
            <CFU 
            num="#9"
            name="Rolling Dice"
            flow={flowchart9}
            desc={<>In <b>CFU #9</b>, the user plays a guessing game where they are to guess randomly generated numbers between 1-6. The player chooses how many times they want to roll the dice and will earn or lose points for correct and incorrect rolls until they have no more rolls left.</>}
            py="https://py3.codeskulptor.org/#user309_GutzgqnKgF3RUGk.py"
            />
            <CFU 
            num="#10"
            name="Rolling Dice"
            flow={flowchart10}
            desc={<>In <b>CFU #10</b>, the user plays a guessing game where the player attempts to guess the randomly generated number between 1-10 and know if their guess was too high or too low.</>}
            py="https://py3.codeskulptor.org/#user309_kSpOnSLhtyH87Sb.py"
            />
            <CFU 
            num="#10.5"
            name="Advanced Group Challenge"
            flow={flowchartAdvanced}
            desc={<>In <b>Advanced Group Challenge</b>, I worked with a partner to create a number guessing game where the player selects the difficulty level, guesses a randomly generated number, tracks the number of attempts and total time taken, and ends after a correct guess or when rounds are exhausted.</>}
            py="https://py3.codeskulptor.org/#user309_tz2trtgYzsdaaub.py"
            />
            <CFU 
            num="#11"
            name="For Loop Programs"
            flow={flowchart11}
            desc={<>In <b>CFU #11</b>, I created a program with three functions, which prints numbers from 10 to 70 in steps of 10, prints numbers from 0 to 10 in increments of 0.5, and sings the "99 Bottles of Beer" song, with a prompt for the user to choose which function to run.</>}
            py="https://py3.codeskulptor.org/#user309_YG0eeYFq1ERt4d8.py"
            />
            <CFU 
            num="#12"
            name="Password Program"
            flow={flowchart12}
            desc={<>In <b>CFU #12</b>, I created a program that allows users to pick one out of two versions for password entry. In Version 1, users are allowed unlimited attempts until the correct password "simonsnyc" is entered, while Version 2 restricts users to three attempts before access is denied</>}
            py="https://py3.codeskulptor.org/#user309_QkXO7akZBmVGciw.py"
            />
            <CFU 
            num="#13"
            name="Happy Dots"
            desc={<>In <b>CFU #13</b>, I used the SimpleGUI Library to draw a smiley face on a 200x200 canvas using the draw_point method.</>}
            py="https://py3.codeskulptor.org/#user310_PERkfLEkauCrIRK.py"
            />
            <CFU 
            num="#14"
            name="Happy Lines"
            desc={<>In <b>CFU #14</b>, I used the SimpleGUI Library to draw a smiley face with a nose on a 200x200 canvas using the draw_line method.</>}
            py="https://py3.codeskulptor.org/#user310_96ZqV6vphoZD4Et.py"
            />
            <CFU 
            num="#15"
            name="Happy Shapes"
            desc={<>In <b>CFU #15</b>, I used the SimpleGUI Library to draw a smiley face with a nose on a 200x200 canvas using the draw_polygon method to incorporate several shapes.</>}
            py="https://py3.codeskulptor.org/#user310_96ZqV6vphoZD4Et.py"
            />
            <CFU 
            num="#16"
            name="Happy Circles"
            desc={<>In <b>CFU #16</b>, I used the SimpleGUI Library to draw a smiley face with a nose on a 200x200 canvas using the draw_circle method</>}
            py="https://py3.codeskulptor.org/#user310_HHooVvZ5sb0fApV.py"
            />
            <CFU 
            num="#17"
            name="Shape Drawing w/ Toggles"
            desc={<>In <b>CFU #17</b>, I used the SimpleGUI Library to draw a circle, square, triangle, and ellipse. The user can select the width and hight of the canvas and select which shapes to view with buttons.</>}
            py="https://py3.codeskulptor.org/#user310_SgPNerreMTPHAPv.py"
            />
            <CFU 
            num="#18"
            name="Price & Reciept Calculation Program"
            desc={<>In <b>CFU #18</b>, I implemented three versions to calculate and display prices using Python concepts like functions, loops, and lists. Users can choose between a fixed list, input their own prices, or input item names and prices to generate a receipt.</>}
            py="https://py3.codeskulptor.org/#user310_cgGVfJIZh7SfcqY.py"
            />
          </>
            } />

          <Route path='/Lab' element={
          <>
            <Lab 
            num="1"
            name="Silly Sentences"
            desc={<>In <b>PS Assignment 1: Silly Sentences</b>, the program asks the user for a name, adjectives, adverb, foods, noun, place, and verb. It then outputs silly sentences using these inputs.</>}            
            py="https://py3.codeskulptor.org/#user309_jDWx3SKdd6k5B36.py"
            />
            <Lab 
            num="2"
            name="Room Area"
            desc={<>In <b>PS Assignment 2: Room Area</b>, the code calculates the total area of a room consisting of a bottom rectangle, a middle rectangle, and a triangle based on user-provided side lengths.</>}
            py="https://py3.codeskulptor.org/#user309_a3avgPGRxQH3c1s.py"
            />
            <Lab 
            num="3"
            name="Chatbot"
            desc={<>In <b>PS Assignment 3: Chatbot</b>, I created a basic chatbot that interacts with the user through inputs, responding with personalized messages based on their name, shoe preference, age, clothing choices, and farewell.</>}
            py="https://py3.codeskulptor.org/#user309_RBYd0Ha2mGOkMAr.py"
            />
            <Lab 
            num="4"
            name="Divisible By 3"
            desc={<>In <b>PS Assignment 4: Divisible By 3</b>, the code checks multiple user-inputted numbers for divisibility by 3 and counts how many are divisible or not, then displays the results.</>}
            py="https://py3.codeskulptor.org/#user309_Z12VVSZ63bFSd7c.py"
            />
            <Lab 
            num="5"
            name="Using EarSketch to Design a Ringtone"
            desc={<>In <b>PS Assignment 5: Using EarSketch to Design a Ringtone</b>, I created a ringtone using the EarSketch Python API. It layers piano melodies and drum beats while applying volume effects and beat patterns.</>}
            py="https://earsketch.gatech.edu/earsketch2/?sharing=JjamRFpOeO1CSsziJj1JQQ&embedded=true"
            />
            <Lab 
            num="6"
            name="Animation"
            desc={<>In <b>PS Assignment 6: Animation</b>, I used the SimpleGUI Python library to create an animated holiday-themed scene with falling snowflakes, a moving sun, detailed skyscrapers, decorated trees, and a snowman.</>}
            py="https://py3.codeskulptor.org/#user310_afbyYNR9vkT6lU3.py"
            />            
            <Lab 
            num="7"
            name="Calendar"
            desc={<>In <b>PS Assignment 7: Calendar</b>, I used functions to determine if a year is a leap year, calculate the number of days in a month, and count the days passed in the year. The program prompts the user to input a date and select an option to either find the days in the month or the days passed in the year.</>}
            py="https://py3.codeskulptor.org/#user310_J0ZF2UOUjHWxSv3.py"
            />
            <Lab 
            num="8"
            name="Personal Organizer"
            desc={<>In <b>PS Assignment 8: Personal Organizer</b>, I used functions to code event data by validating date inputs, storing event details, and displaying them with month names. It supports adding multiple events until the user stops.</>}
            py="https://py3.codeskulptor.org/#user310_6cMgdxBuhxuScra.py"
            />
          </>
            } />
          <Route path='/Project' element={
          <>
            <Project
             name="Thanksgiving Drawing"
             desc={<>I made a <b>Thanksgiving Drawing</b> using <b>SimpleGUI</b> to create a drawing of a Turkey for Thanksgiving!</>}
             py="https://py3.codeskulptor.org/#user310_fb0wLnuDuPkkUju.py"
            />
            <Project
             name="Emoji"
             desc={<>I worked with my peers to display our <b>Emojis</b> using <b>SimpleGUI.</b> These emojis are scaled to the width and height selected by the user</>}
             py="https://py3.codeskulptor.org/#user310_vbdk6F14BP9P5Xm.py"
            />
            <Project
             name="Empires Horizon"
             wire={empires}
             desc={<>I developed <b>Empires Horizon</b> using the <b>SimpleGUI</b> Python Library. This game is inspired by the <b>G4C Peaceformers Challenge</b>, where students imagine a world where players need to take action about how resources are shared and divided.</>}
             py="https://py3.codeskulptor.org/#user310_SAfoXEbne8BMQy3.py"
            />
          </>  
            } />
          <Route path='/InfyApp' element={<InfyApp />} />
          <Route path='/Competition' element={
            <>
            <Competition 
            name="SkillsUSA-25 | Cineplex Cinemas"
            web="https://towafh.github.io/SkillsUSA-25/"
            />
            <Competition 
            name="2025 Citywide Graphic Arts Competition | Sheikhs N Burgers"
            web="https://towafh.github.io/SheikhsNBurgers/"
            />
            </>
            } 
            />
          <Route path='/Certification' element={<Certification />} />
          <Route path='/About' element={<About />} />
        </Routes>
    </nav>
  </div>
  </>
  )
}

export default App