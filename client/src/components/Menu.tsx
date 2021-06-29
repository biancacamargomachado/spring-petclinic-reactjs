import * as React from 'react';

const MenuItem = ({ active, url, title, children }: { active: boolean, url: string, title: string, children?: any }) => (
  <li className={active ? 'active' : ''}>
    <a href={url} title={title}>{children}</a>
  </li>
);


export default ({ name }: { name: string }) => (
  <nav className='navbar navbar-default' role='navigation'>
    <div className='container'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='/'><span></span></a>
        <a href='/error' data-activates='menu-mobile' className='navbar-toggle'>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </a>
        <div>
          <ul className='navbar-toggle' id='menu-mobile'>
            <li><a href='/'>Home</a></li>
            <li><a href='/owners/list'>Find owners</a></li>
            <li><a href='/vets'>Veterinarians</a></li>
            <li><a href='/error'>Error</a></li>
          </ul>
        </div>
      </div>
      <div className='navbar-collapse collapse'>
        <ul className='nav navbar-nav navbar-right'>
          <MenuItem active={name === '/'} url='/' title='home page'>
            <span className='glyphicon glyphicon-home' aria-hidden='true'></span>&nbsp;
            <span>Home</span>
          </MenuItem>

          <MenuItem active={name.startsWith('/owners')} url='/owners/list' title='find owners'>
            <span className='glyphicon glyphicon-search' aria-hidden='true'></span>&nbsp;
            <span>Find owners</span>
          </MenuItem>

          <MenuItem active={name === 'vets'} url='/vets' title='veterinarians'>
            <span className='glyphicon glyphicon-th-list' aria-hidden='true'></span>&nbsp;
            <span>Veterinarians</span>
          </MenuItem>

          <MenuItem active={name === 'error'} url='/error'
            title='trigger a RuntimeException to see how it is handled'>
            <span className='glyphicon glyphicon-warning-sign' aria-hidden='true'></span>&nbsp;
            <span>Error</span>
          </MenuItem>
        </ul>
      </div>
    </div>
  </nav>
);
function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}

