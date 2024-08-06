import userimage from './../../assets/img/personal_info.png'
import { FaArrowRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import MainLayout from '@/Components/commonLayout/MainLayout';
import { useRouter } from 'next/router'
import { destroyCookie } from 'nookies'

const Index = () => {
    const router= useRouter()


    const handleLogoutFunction = () => {
        destroyCookie(null, 'Token');
        console.log(destroyCookie, 'Tokendeleted')
        alert('user logout sucessfully')
        router.push('/signin')
    }


    return (
        <>
        <MainLayout>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <h2>My Account</h2>
                        <div className="col-4">
                            <div className="personal_info h-100">
                                <div className="personal_img p-3">
                                    <div className='d-flex align-items-center  mb-2'>
                                        <img src={userimage.src} alt="" />
                                        <div className='d-flex gap-3'>
                                            <p className='m-0 '>Personal Info</p> <Link href='/personalinfo'><span>< FaArrowRight /></span></Link>
                                        </div>
                                    </div>

                                    <div className="personal_text">
                                        <p className='m-0'>Personal</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-4">
                            <div className="personal_info h-100">
                                <div className="personal_img p-3">
                                    <div className='d-flex align-items-center mb-2 '>
                                        <img src={userimage.src} alt="" />
                                        <div className='d-flex gap-3'>
                                            <p className='m-0 '>Change Password</p> <Link href='/changepassword'><span>< FaArrowRight /></span></Link>
                                        </div>
                                    </div>

                                    <div className="personal_text">
                                        <p className='m-0'>Update your password and secure  your account</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="personal_info h-100">
                                <div className="personal_img p-3">
                                    <div className='d-flex align-items-center mb-2'>
                                        <img src={userimage.src} alt="" />
                                        <div className='d-flex gap-3'>
                                            <p className='m-0 '>Notification Setting</p> <Link href='/notification'><span>< FaArrowRight /></span></Link>
                                        </div>
                                    </div>

                                    <div className="personal_text">
                                        <p className='m-0'>Review payment payout of campaous git card and taxes</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12 mt-5 shadow p-3 border-1'>
                                <div className="logout-container d-flex justify-content-between">
                                    <h4>logout</h4>
                                    <button type='button' className='bg-white border-0 fs-3'> <FaCircleArrowRight onClick={handleLogoutFunction} /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </MainLayout>
        </>
    )
}
export default Index;