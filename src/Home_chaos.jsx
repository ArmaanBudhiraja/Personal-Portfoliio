import './Home_chaos.css'
import FileIcon from './images/File.png'
import ProfPhoto from './images/chaotic.jpeg'
import { Link } from 'react-router-dom';
import GalleryIcon from './images/gallery.png'
import InstaIcon from './images/insta.png'

function Home_chaos() {
    return (
        <>
            <div className = "Main_c" >
                <div className = "Navbar_c">
                    <a className='a_c' href="#">Home</a>
                    <a className='a_c' href="#">About</a>
                    <a className='a_c' href="#">Skills</a>
                    <a className='a_c' href="#">Project</a> 
                    <a className='a_c' href="#">Contact</a>
                    <Link to="/" className='light_c'>Professional</Link>
                    <Link to ="/Home_chaos" className='dark_c'>Chaotic</Link>
                </div>
                <div className='Main_Content'>
                    <div className='Content'>
                        <h2 className='h2_c'>Hola, I am</h2>
                        <h1 className='h1_c'>ARMAAN</h1>
                        <h1 className='h1_c'>BUDHIRAJA</h1>
                        <h2 className='down_h2_c'>Artist and Anchor</h2>
                        <button className='gallery_button'>
                            <img src={GalleryIcon} alt='gallery_icon' className='gallery_icon'/>
                            <p className='gallery_text'>Gallery</p>
                        </button>
                        <div className='Button_line_c'>    
                            <button className='follow_me'>Follow Me</button>
                            <button className='insta_button'>
                                <img src={InstaIcon} alt='insta_icon' className='insta_icon'/>
                            </button>
                        </div>
                        <div className='hire_msg'>
                            <p>plss 😭</p>
                        </div>
                        
                    </div>
                    <div className='Photo_c'>
                        <img src={ProfPhoto} alt='Profile_Photo' className='Profile_photo_c'/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home_chaos
