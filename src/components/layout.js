import React from 'react'
import Header from './header'
import Footer from './footer'
// import Header from '@components/hea/header'

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
