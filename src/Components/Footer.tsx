
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { GiCabbage } from "react-icons/gi";
import playstore from './../assets/img/play.png'
import appstore from './../assets/img/appstore.png'


const Footer=()=>{
    return(
        <>
                    <section className='section-footer'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="socal_icons">
                                <FaFacebook className='icons' />
                                <FaSquareInstagram className='icons' />
                                <FaTwitterSquare className='icons' />
                                <GiCabbage className='icons' />

                            </div>
                            <div className="text">
                                <p>@copyright 2020 shaikh sultan award- all right reseved term and consition</p>
                            </div>
                            <div className="footer_mag">
                                <img src={playstore.src} alt="" />
                                <img src={appstore.src} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Footer