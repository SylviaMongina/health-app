import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="Nav">
            <div className='Logo'>
                <ul>
                    <li>
                        <h1><Link to='/'>My-Health</Link></h1>
                    </li>
                </ul>
            </div>
            <div className='Nav-right'>
                <ul>
                    <li><Link to='/'>For Providers</Link></li>
                    <li><Link to='/medications'>Medications</Link></li>
                    <li><Link to='/doctors'>Doctors</Link></li>
                    <li>
                        <button className="Btn-navbar" ><a href='./'>Sign Up</a></button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
