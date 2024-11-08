// Image Imports
import profilePic from '../assets/pfp.png'

function Home(){
return(
<>
    <div className='about-container'>
    {/* Container */}
        <div className='about-me'>
        <h1>Who Am I?</h1>
        <img src={profilePic} className='profile-pic' />
        <p>I'm Towaf from Queens, New York. I'm a rising junior at Thomas Edison CTE HS with a passion for Computer Science, where I'm currently learning Python!</p>
    </div>

    <div className='about-me'>
        <h1>Education</h1>
        <p>Thomas A. Edison CTE Highschool </p>
        <p>Web/App Development</p>
        <p>Progamming and Prototyping</p>
        <p>SY 2024-2025</p>
    </div>

    <div className='about-me'>
        <h1>Marking Period 1</h1>
            <div className='months'>
                <div className='september'>
                    <h1>September</h1>
                        <ul>
                            <li>Reviewed Variables, Data-Types, Mathematical Operations in Programming</li>
                            <li>Learned about Computer Hardware/Sotware, CPU's, Memory Types, Binary Numbers, and <b>Escape Sequences</b></li>
                            <li>Introduced the <b>int()</b>, <b>str()</b>, <b>input()</b>, <b>max()</b>, and <b>min()</b> functions</li>
                            <li>Completed CFU from #1 to #4</li>
                            <li>Completed Unit 1 in ProjectStem</li>
                        </ul>
                </div>

                <div className='october'>
                    <h1>October</h1>
                        <ul>
                            <li>Learned Custom Function Syntax and Parameters: <b>def function_name(param1, param2):</b></li>
                            <li>Introduced <b>Conditonal Statements()</b>, <b>Comparison Operators</b>, <b>Logical Operator</b>, <b>If-Elif-Else Statements</b>, and <b>Algorithims</b></li>
                            <li>Learned about <b>While</b> and <b>For</b> Loops</li>
                            <li>Developed Flow Charts to outline the Design process using Figma</li>
                            <li>Completed CFU from #5 to #12</li>
                            <li>Completed Unit 2-4 in ProjectStem</li>
                        </ul>
                </div>

                <div className='November'>
                    <h1>November</h1>
                        <ul>
                            <li>Student Representative for Web/App Development at the Open House in TAEHS</li>
                            <li>Developed Junior Portfolio using React.js</li>
                        </ul>
                </div>
            </div>
    </div>

    </div>
</>
)
}

export default Home