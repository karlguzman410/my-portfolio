import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


export default function NavBar() {
    return (
        <header className="bg-gray-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/'
                        exact
                        activeClassName="text-gray-900"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-black text-4xl font-bold tracking-widest">
                        Karl Guzman
                    </NavLink>
                    <NavLink to='/post'
                        activeClassName="bg-gray-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-black">
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project'
                        activeClassName="bg-gray-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-black">
                        Projects
                    </NavLink>
                    <NavLink to='/about'
                        activeClassName="bg-gray-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-black">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/howtousethis1" className='mr-4' target='_blank' fgColor='white' style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/karl-guzman-aa7978103/" className='mr-4' target='_blank' fgColor='white' style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/karlguzman410" className='mr-4' target='_blank' fgColor='white' style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}