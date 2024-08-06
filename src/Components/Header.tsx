// import profileimg from '../../src/assets/img/person.png'
import imagelogo from './../assets/img/profile.png'
import profileimg from './../assets/img/person.png'

const Header = ()=>{
    return(
        <>
         <section className='section-header'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="logo main_logo" >
                                <img src={imagelogo.src} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="profile"  >
                                <img src={profileimg.src} alt="" /> <span>jonas Brother</span>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Header