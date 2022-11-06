import Navigation from "./Navbar"

function Title(){
    return(
        <>
        <header class="header">
            <div class="header-1">
                <a href="/" class="logo">Netlab Bookstore</a>

                <form action="" class="search-form">
                    <input type="search" name="" placeholder="serach here..." id="search-box"></input>
                </form>
            </div>

            <div class="header-2">
                <nav class="navbar">
                    <a href="/">home</a>
                    <a href="/">featured</a>
                    <a href="/">arrivals</a>
                    <a href="about">About</a>
                    <a href="contact">Contact</a>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Title