import { Header } from "../components/header"
import { Home } from "../components/home"
import { Footer } from "../components/footer"


export const Profile = () => {
    return (
        <div className="max-w-7xl min-h-screen m-auto bg-black">
            <Header />
            <Home />
            <Footer />
        </div>
    )
}