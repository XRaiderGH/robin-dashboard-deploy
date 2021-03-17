import Header from './header'
import {useRouter} from 'next/router'
import Link from './ActiveLink'
import Image from 'next/image'

const Layout = ({children}) => {

    const router = useRouter();
    return (
        <>
            <div className='flex'>
                <div className="sideNav">
                    <div className="flex flex-col text-xl mt-8 ml-8 mb-8">
                        <span>Logged in as,</span>
                        <span>Sjoerd Roelvink</span>
                    </div>

                    <nav className='w-328'>
                        <ul className='navItems text-3xl font-medium'>
                            <li>
                                <Link href={'/'}>
                                    <a className='navItem block w-100 pl-7 py-8'>
                                        <Image src='/assets/tachometer-alt-solid.svg' width='29px' height='23px' alt=""/>
                                        <span className='ml-5'>Overview</span>
                                    </a>
                                </Link>
                                <hr/>
                            </li>

                            <li>
                                <Link href={'/clients'}>
                                    <a className='navItem block w-100 pl-7 py-8'>
                                        <Image src='/assets/users-solid.svg' width='29px' height='23px' alt=""/>
                                        <span className='ml-5'>Clients</span>
                                    </a>
                                </Link>
                                <hr/>
                            </li>

                            <li>
                                <Link href={'/tasks'}>
                                    <a className='navItem block w-100 pl-7 py-8'>
                                        <Image src='/assets/tasks-solid (2).svg' width='29px' height='23px' alt=""/>
                                        <span className='ml-5'>Tasks</span>
                                    </a>
                                </Link>
                                <hr/>
                            </li>

                            <li>
                                <Link href={'/panic'}>
                                    <a className='navItem block w-100 pl-7 py-8'>
                                        <Image src='/assets/bell-solid.svg' width='29px' height='23px' alt=""/>
                                        <span className='ml-5'>Panic</span>
                                    </a>
                                </Link>
                                <hr/>
                            </li>

                        </ul>
                    </nav>
                </div>
                <main className='bg-gradient-to-br from-green-500 to-blue-400 from h-100 w-full flex flex-row justify-center'>
                    <div className="wrap sm:w-9/10 w-80">
                        <Header/>
                        <hr className='opacity-20'/>
                        <div className="body mt-7">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Layout