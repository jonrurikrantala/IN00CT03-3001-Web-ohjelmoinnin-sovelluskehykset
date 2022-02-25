import React from 'react'

export default function Header() {
    return (
        <div className="headerOuter">
            <div className="headerInner flex-row">
                <a className="logo">Helsingin Sanomat</a>
                <a className="navBtn">Etusivu</a>
                <a className="navBtn">Uutiset</a>
                <a className="navBtn">Lehdet</a>
                <a className="navBtn">Asiakaspalvelu</a>
                <a className="navBtn">Tilaa</a>
                <a className="navBtn">Kirjaudu</a>
                <a className="navBtn">Valikko</a>
            </div>
        </div>
    )
}