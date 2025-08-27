import './Home_professional.css'

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
                <div className='Content'>
                    <h2>Hi, I am</h2>
                    <h1>ARMAAN</h1>
                    <h1>BUDHIRAJA</h1>
                    <h2 className='down_h2'>Creative Technologist</h2>
                </div>
            </div>
        </>
    )
}


export default Home_professional