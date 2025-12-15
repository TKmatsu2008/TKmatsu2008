import './App.css'
import logo from './assets/logo.png'
import githubIcon from './assets/github-mark.png'
import projectData from './data/project.json'
import researchData from './data/research.json'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
              className='!text-gray-600 hover:text-orange-600 font-medium transition duration-150 ease-in-out'>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className='w-full p-4 pb-20'>
        <section id='profile' className='min-h-screen md:max-w-3xl md:mx-auto md:pt-[100px]'>
          <h1 className='text-gray-600 leading-relaxed mb-8'>
            Profile
          </h1>
          <p className='text-gray-600 leading-relaxed min-h-full'>            
            筑波大学大学院 システム情報工学研究群 情報理工学位プログラム 修士課程2年（在籍中）
            <br /><br />
            2020-2024 筑波大学 情報学群 情報メディア創成学類
            <br />
            2024-現在 筑波大学大学院 システム情報工学研究群 情報理工学位プログラム
            <br /><br />
            <p className='text-align:right'>
            チーム開発が非常に好きで、チーム開発を通じてハッカソンや、LLMを利用したプロダクト、組込み開発など様々なことに挑戦してきました。
            最近は自分自身の技術力を向上させることにハマっており、esportsのダッシュボードなどを作っていました。デプロイはまだまだ赤子です。
          </p>
        </p>
        </section>

        <section id='project' className='w-full max-w-full md:max-w-7xl md:mx-auto mx-auto min-h-screen pt-20'>
          <h1 className='text-gray-600 leading-relaxed mb-8'>
            Project
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6">
            {projectData.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="w-[350px] border border-gray-300 shadow-lg bg-white cursor-pointer overflow-hidden p-0">
                    <CardContent className="p-0">
                      <img src={project.image} alt={project.name} className="w-full h-[200px] object-cover" />
                      <div className="p-3">
                        <p>{project.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="min-w-[90vw] max-h-[90vh] w-full overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl border-b pb-2">{project.details?.title || project.name}</DialogTitle>
                  </DialogHeader>

                  <div className="flex flex-col md:flex-row gap-6 mt-4">
                    {/* 左上: 画像 */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-auto object-cover rounded-md border border-gray-200" 
                      />
                    </div>

                    {/* 右側: 期間〜プロダクト */}
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                      {project.details?.summary && (
                        <DialogDescription className="text-lg text-gray-700 text-left">
                          {project.details.summary}
                        </DialogDescription>
                      )}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                        {project.duration && (
                          <div>
                            <p className="text-sm font-semibold text-gray-500">期間</p>
                            <p className="font-bold">{project.duration}</p>
                          </div>
                        )}
                        {project.details?.role && (
                          <div>
                            <p className="text-sm font-semibold text-gray-500">担当役割</p>
                            <p className="font-bold">{project.details.role}</p>
                          </div>
                        )}
                        {project.details?.technology && (
                          <div>
                            <p className="text-sm font-semibold text-gray-500">使用技術</p>
                            <p className="font-bold">{project.details.technology}</p>
                          </div>
                        )}
                        {project.details?.product_type && (
                          <div>
                            <p className="text-sm font-semibold text-gray-500">プロダクト</p>
                            <p className="font-bold">{project.details.product_type}</p>
                          </div>
                        )}
                      </div>

                      {project.github && (
                        <div className="flex justify-end mt-auto">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block hover:opacity-70 transition-opacity"
                          >
                            <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 下部: 担当機能以下 */}
                  <div className="mt-4 space-y-6">
                    {project.details?.features && project.details.features.length > 0 && (
                      <section>
                        <h3 className="text-2xl font-bold mb-3">担当機能・達成目標</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          {project.details.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {project.details?.contributions && project.details.contributions.length > 0 && (
                      <section>
                        <h3 className="text-2xl font-bold mb-3">貢献と学び（成果）</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          {project.details.contributions.map((contribution, idx) => (
                            <li key={idx}>{contribution}</li>
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <section id='research' className='min-h-screen pt-20'>
          <h1 className='text-gray-600 leading-relaxed mb-8'>
            Research
          </h1>

           <div className="flex flex-wrap justify-center gap-6">
            {researchData.map((research) => (
              <Dialog key={research.id}>
                <DialogTrigger asChild>
                  <Card className="w-[350px] border border-gray-300 shadow-lg bg-white cursor-pointer overflow-hidden p-0">
                    <CardContent className="p-0">
                      <img src={research.image} alt={research.name} className="w-full h-[200px] object-cover" />
                      <div className="p-3">
                        <p>{research.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="min-w-[90vw] max-h-[90vh] w-full overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl border-b pb-2">{research.details?.title || research.name}</DialogTitle>
                  </DialogHeader>

                  <div className="flex flex-col md:flex-row gap-6 mt-4">
                    {/* 左上: 画像 */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                      <img 
                        src={research.image} 
                        alt={research.name} 
                        className="w-full h-auto object-cover rounded-md border border-gray-200" 
                      />
                    </div>

                    {/* 右側: 期間〜プロダクト */}
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                      {research.details?.background_purpose && (
                        <DialogDescription className="text-lg text-gray-700 text-left">
                          <span className="font-bold block text-gray-900 mb-1">背景・目的</span>
                          {research.details.background_purpose}
                        </DialogDescription>
                      )}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                        {research.duration && (
                          <div>
                            <p className="text-sm font-semibold text-gray-500">期間</p>
                            <p className="font-bold">{research.duration}</p>
                          </div>
                        )}
                        {research.category && (
                          <div>
                            <p className="text-sm font-semibold text-gray-500">カテゴリ</p>
                            <p className="font-bold">{research.category}</p>
                          </div>
                        )}
                        {research.details?.technology && (
                          <div className="sm:col-span-2">
                            <p className="text-sm font-semibold text-gray-500">使用技術</p>
                            <p className="font-bold">{research.details.technology}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 下部: 担当機能以下 */}
                  <div className="mt-4 space-y-6">
                    {research.details?.research_content && (
                      <section>
                        <h3 className="text-2xl font-bold mb-3">研究内容</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {research.details.research_content}
                        </p>
                      </section>
                    )}

                    {research.details?.implementation_features && research.details.implementation_features.length > 0 && (
                      <section>
                        <h3 className="text-2xl font-bold mb-3">実装機能・特徴</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          {research.details.implementation_features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {research.details?.main_results && (
                      <section>
                        <h3 className="text-2xl font-bold mb-3">主な成果・結果</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {research.details.main_results}
                        </p>
                      </section>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <section id='others' className='w-full max-w-full md:max-w-7xl md:mx-auto mx-auto min-h-screen pt-20'>
          <h1 className='text-gray-600 leading-relaxed mb-8'>
            Others
          </h1>
          <div className='flex'>
            <div className='w-1/2 border-r border-gray-300 pr-4'>
              <h2>
                awards
              </h2>
              <p>
                2025年7月 可視化情報学会アートコンテスト - 入賞
                <br />
                東京メトロの路線ネットワーク図

              </p>
            </div>

            <div className='w-1/2 pl-4'>
              <h2>
                skills
              </h2>
              <p>javascript, python, swiftUI</p>
            </div>
          </div>
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
