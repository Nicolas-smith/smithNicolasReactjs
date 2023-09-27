import Navbar from "../Navbar/Navbar"

const Layout = ({children}) => {
    return (
        <>
        <Navbar brand="Morioh Manga"/>
        <div>
            {children}
        </div>
        </>
    )
}

export default Layout;