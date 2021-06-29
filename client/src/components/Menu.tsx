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
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#links-menu'>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
      </div>
      <nav id='links-menu' className='navbar-collapse collapse'>
        <ul className='nav navbar-nav navbar-right'>
          <li><a href='/'>Home</a></li>
          <li><a href='/owners/list'>Find owners</a></li>
          <li><a href='/vets'>Veterinarians</a></li>
          <li><a href='/error'>Error</a></li>
        </ul>
      </nav>
    </div>
  </nav>
);