import './App.css'

function App() {
  const navLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'Project', href: '#project' },
    { name: 'Research', href: '#research' },
    { name: 'Others', href: '#others' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="">
      <header className ="sticky top-0 bg-white shadow-md">
        <div className='container mx-auto flex items-center justify-between px-4 py-2'>
          <a href="/" className='flex items-center space-x-2'>
            <img src="src/assets/logo.png" alt="Logo" className="h-6 w-6 text-orange-500" />
          </a>
          <nav className='hidden md:flex md:space-x-8'>
            {navLinks.map((link)=>(
              <a 
              key={link.name}
              href={link.href}
              className='text-gray-600 hover:text-orange-600 font-medium transition duration-150 ease-in-out'>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className='min-h-screen p-4'>
        <section id='profile' className='min-h-screen'>
          <h1 className='text-gray-600 leading-relaxed'>
            Profile
          </h1>
          <p className='text-gray-600 leading-relaxed'>
            こんにちわ。TKmatsu2008です。 --- I am TKmatsu2008.
          </p>
        </section>

        <section id='project' className='min-h-screen'>
          <h1 className='text-gray-600 leading-relaxed'>
            Project
          </h1>
        </section>

        <section id='research' className='min-h-screen'>
          <h1 className='text-gray-600 leading-relaxed'>
            Research
          </h1>
        </section>

        <section id='others' className='min-h-screen'>
          <h1 className='text-gray-600 leading-relaxed'>
            Others
          </h1>
        </section>
      </main>

      <footer className='sticky bottom-0 bg-white shadow-md'>
        <section id='contact' className='min-h-screen'>
          <h2 className='text-gray-600 leading-relaxed'>
            Contact
          </h2>
        </section>
      </footer>
    </div>

  )
}

export default App
