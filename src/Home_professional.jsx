import './Home_professional.css'
import FileIcon from './images/File.png'
import ProfPhoto from './images/photo.jpg'

function Home_professional() {
    return (
        <>
            <div className = "Main" >
                <div className = "Navbar">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Skills</a>
                    <a href="#">Project</a> 
                    <a href="#">Contact</a>
                    <a href="#" className='light'>Professional</a>
                    <a href="#" className='dark'>Chaotic</a>
                </div>
                <div className='Main_Content'>
                    <div className='Content'>
                        <h2>Hi, I am</h2>
                        <h1>ARMAAN</h1>
                        <h1>BUDHIRAJA</h1>
                        <h2 className='down_h2'>Creative Technologist</h2>
                        <button className='resume_button'>
                            <img src={FileIcon} alt='resume_icon' className='resume_icon'/>
                            <p className='Resume_text'>Resume</p>
                        </button>
                        <div className='Button_line'>
                            <button className='Hire_me'>Hire Me</button>
                            <button className='github_button'>
                                <img src='https://img.icons8.com/ios-glyphs/50/000000/github.png' alt='github_icon' className='github_icon'/>
                            </button>
                            <button className='linkedin_button'>
                                <img src='https://img.icons8.com/ios-filled/50/000000/linkedin.png' alt='linkedin_icon' className='linkedin_icon'/>
                            </button>
                        </div>
                        <div className='hire_msg'>
                            <p>plss 😭</p>
                        </div>
                    </div>
                    <div className='Photo'>
                        <img src={ProfPhoto} alt='Profile_Photo' className='Profile_photo'/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home_professional