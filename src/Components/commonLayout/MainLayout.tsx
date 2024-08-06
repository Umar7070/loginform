import Footer from "../Footer"
import Header from "../Header"
// import Account from './../../pages/account'

const MainLayout = (props: any) => {
    return (
        <>
            <div className="">
                <Header />
                {props.children}
                <Footer />
            </div>
        </>
    )

}
export default MainLayout