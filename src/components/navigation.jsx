export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            MR.
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#sobremi' className='page-scroll'>
                Sobre mí
              </a>
            </li>
            <li>
              <a href='#tecnologias' className='page-scroll'>
                Tecnologías
              </a>
            </li>
            <li>
              <a href='#proyectos' className='page-scroll'>
                Proyectos
              </a>
            </li>
            <li>
              <a href='#contacto' className='page-scroll'>
                Contacto
              </a>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  )
}
