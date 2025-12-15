import './App.css'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  const navLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'Project', href: '#project' },
    { name: 'Research', href: '#research' },
    { name: 'Others', href: '#others' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="w-full min-h-full transition-all duration-300">
      <header className ="w-full sticky top-0 bg-gray-100">
        <div className='w-full max-w-full md:max-w-7xl md:mx-auto mx-auto flex flex-row flex-nowrap items-center justify-between px-4 py-2'>
          <a href="/" className='flex items-center space-x-2 flex-shrink-0'>
            <img src="src/assets/logo.png" alt="Logo" className="header-logo h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 object-contain text-orange-500" />
          </a>
          <nav className='flex flex-row flex-nowrap items-center space-x-8'>
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

      <main className='w-full p-4 pb-20'>
        <section id='profile' className='min-h-screen md:max-w-3xl md:mx-auto md:pt-[100px]'>
          <h1 className='text-gray-600 leading-relaxed'>
            Profile
          </h1>
          <p className='text-gray-600 leading-relaxed min-h-full'>
            髙松一鷹
            <br /><br />
            筑波大学大学院 システム情報工学研究群 情報理工学位プログラム 修士課程2年（在籍中）
            <br /><br />
            2020-2024 筑波大学 情報学群 情報メディア創成学類
            <br />
            2024-現在 筑波大学大学院 システム情報工学研究群 情報理工学位プログラム
            <br /><br />
            チーム開発が非常に好きで、チーム開発を通じてハッカソンや、LLMを利用したプロダクト、組込み開発など様々なことに挑戦してきました。
            最近は自分自身の技術力を向上させることにハマっており、esportsのダッシュボードなどを作っていました。デプロイはまだまだ赤子です。
          </p>
        </section>

        <section id='project' className='w-full max-w-full md:max-w-7xl md:mx-auto mx-auto min-h-screen'>
          <h1 className='text-gray-600 leading-relaxed'>
            Project
          </h1>
          <Card className="border border-gray-300 shadow-lg bg-white">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
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

      <footer className='bg-white bg-gray-100'>
        <div className='w-full md:max-w-5xl md:mx-auto'>
          <section id='contact' className=''>
            <h2 className='text-gray-600 leading-relaxed'>
              Contact
            </h2>
          </section>
        </div>
      </footer>
    </div>

  )
}

export default App
