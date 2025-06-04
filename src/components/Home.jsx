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
        <h1>Fall Term - Marking Period 1</h1>
            <div className='months'>
                <div className='september'>
                    <h1>September</h1>
                        <ul>
                            <li>Reviewed Variables, Data-Types, Mathematical Operations in Programming</li>
                            <li>Learned about Computer Hardware/Sotware, CPU's, Memory Types, Binary Numbers, and Escape Sequences</li>
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

                <div className='november'>
                    <h1>November</h1>
                        <ul>
                            <li>Student Representative for Web/App Development at the Open House in TAEHS</li>
                            <li>Developed Junior Portfolio using React.js</li>
                        </ul>
                </div>
            </div>
    </div>

    <div className='about-me'>
        <h1>Fall Term - Marking Period 2</h1>
            <div className='months'>
                <div className='november'>
                    <h1>November</h1>
                        <ul>
                            <li>Learned how to program in EarSketch using their Built-in Functions to create music</li>
                            <li>Introduced <b>fitMedia()</b>, <b>setEffect()</b>, <b>control()</b>, <b>makeBeat()</b>, and <b>setTempo()</b> to manipulate music with <b>EarSketch</b></li>
                            <li>Completed a Thanksgiving Drawing Project</li>
                            <li>Completed CFU from #13 to #15</li>
                            <li>Completed Unit 5 in ProjectStem</li>
                        </ul>
                </div>

                <div className='december'>
                    <h1>December</h1>
                        <ul>
                            <li>Learned how to utilize the <b>SimpleGUI</b> Library to create drawings</li>
                            <li>Introduced <b>simplegui.create_frame()</b>, <b>frame.add_button()</b>, <b>frame.set_canvas_background()</b>, <b>frame.set_draw_handler()</b>, <b>simplegui.load_image()</b>, <b>frame.start()</b>, and <b>frame.add_label()</b> for creating interactive games with <b>SimpleGUI</b></li>
                            <li>Attended the Pencil / InfoSys InfyApp Bootcamp at One WTC</li>
                            <li>Completed CFU #16</li>
                            <li>Completed Unit 6 in ProjectStem</li>
                        </ul>
                </div>

                <div className='january'>
                    <h1>January</h1>
                        <ul>
                            <li>Learned how to utilize the <b>List</b> to store strings, integers, floats, and other datatypes</li>
                            <li>Completed Emoji Group Project and Peaceformers Game Project</li>
                            <li>Completed CFU #17-18</li>
                            <li>Completed Unit 7-8 in ProjectStem</li>
                        </ul>
                </div>
            </div>
    </div>

    <div className='about-me'>
        <h1>Spring Term - Marking Period 1</h1>
            <div className='months'>
                <div className='february'>
                    <h1>February</h1>
                        <ul>
                            <li>Learned how to program in EarSketch using their Built-in Functions to create music</li>
                            <li>Introduced <b>fitMedia()</b>, <b>setEffect()</b>, <b>control()</b>, <b>makeBeat()</b>, and <b>setTempo()</b> to manipulate music with <b>EarSketch</b></li>
                            <li>Completed a Thanksgiving Drawing Project</li>
                            <li>Completed CFU from #13 to #15</li>
                            <li>Completed Unit 5 in ProjectStem</li>
                        </ul>
                </div>

                <div className='march'>
                    <h1>March</h1>
                        <ul>
                            <li>Learned how to utilize the <b>SimpleGUI</b> Library to create drawings</li>
                            <li>Introduced <b>simplegui.create_frame()</b>, <b>frame.add_button()</b>, <b>frame.set_canvas_background()</b>, <b>frame.set_draw_handler()</b>, <b>simplegui.load_image()</b>, <b>frame.start()</b>, and <b>frame.add_label()</b> for creating interactive games with <b>SimpleGUI</b></li>
                            <li>Attended the Pencil / InfoSys InfyApp Bootcamp at One WTC</li>
                            <li>Completed CFU #16</li>
                            <li>Completed Unit 6 in ProjectStem</li>
                        </ul>
                </div>

                <div className='april'>
                    <h1>April</h1>
                        <ul>
                            <li>Learned how to utilize the <b>List</b> to store strings, integers, floats, and other datatypes</li>
                            <li>Completed Emoji Group Project and Peaceformers Game Project</li>
                            <li>Completed CFU #17-18</li>
                            <li>Completed Unit 7-8 in ProjectStem</li>
                        </ul>
                </div>
            </div>
    </div>

    </div>
</>
)
}

export default Home