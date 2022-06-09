import React from 'react';

export class Header extends React.Component{
    
    render() {
        return(
            <nav className='navbar navbar-default'>
                <div className='container'>
                    <div className='navbar-header'>
                        <ul className='nav navbar-nav'>
                            <li><a href="https://app.slack.com/client/T034UBTL0HZ/C035J4C9UJU">Home</a></li>
                        </ul>

                    </div>                
                </div>
            </nav>
            

        );
    }

}