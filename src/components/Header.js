
import Head from 'next/head'



function Header() {
    return (
        <div>
            <Head>
                <title>Chava Site</title>
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1/1228.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Scope+One&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Scope+One&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity={process.env.fontAwesomeKey} crossOrigin="anonymous"></link>
            </Head>
        </div >



    )
}

export default Header;