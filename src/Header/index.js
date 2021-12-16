import { Link } from "react-router-dom"


const Header = () =>{
    return(
        <>
            <header>
                    <h1>STORE</h1>
                <nav>
                    <Link to = {"/"}>  Products </Link><br/>
                    <Link to = {"/carrinho"}> Cart </Link>
                </nav>
            </header>
        </>
    )
}

export default Header