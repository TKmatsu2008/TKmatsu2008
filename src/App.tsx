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
import { Mail, Github, MapPin } from 'lucide-react';

function App() {
  const navLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'Project', href: '#project' },
    { name: 'Research', href: '#research' },
    { name: 'Others', href: '#others' },
    { name: 'Contact', href: '#contact' },
  ]
  const contactInfo = {
    email: "takamatsu.works.2008@gmail.com",
    github: "https://github.com/TKmatsu2008",
    Wantedly: "https://www.wantedly.com/id/takamatsu_kazutaka",
    location: "茨城県 / リモートワーク可" // 任意
  };

  return (
    <div className="w-full min-h-full transition-all duration-300">
      <header className="w-full sticky top-0 bg-gray-100 z-50">
        <div className='w-full max-w-full md:max-w-7xl md:mx-auto mx-auto flex flex-row flex-nowrap items-center justify-between px-4 py-2'>
          <a href="/" className='flex items-center space-x-2 flex-shrink-0'>
            <img src={logo} alt="Logo" className="header-logo h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 object-contain text-orange-500" />
          </a>
          <nav className='flex flex-row flex-nowrap items-center space-x-8'>
            {navLinks.map((link) => (
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

      <main className='w-full'>
        <section id='profile' className='min-h-screen md:max-w-3xl md:mx-auto py-20 px-4'>
          <h1 className='text-4xl font-bold text-gray-800 mb-8'>
            Profile
          </h1>
          <div className='text-gray-600 leading-relaxed space-y-4'>
            <p>
              筑波大学大学院 システム情報工学研究群 情報理工学位プログラム 修士課程2年（在籍中）
            </p>
            <p>
              2020-2024 筑波大学 情報学群 情報メディア創成学類
              <br />
              2024-現在 筑波大学大学院 システム情報工学研究群 情報理工学位プログラム
            </p>
            <p className='pt-4'>
              チーム開発が非常に好きで、チーム開発を通じてハッカソンや、LLMを利用したプロダクト、組込み開発など様々なことに挑戦してきました。
              最近は自分自身の技術力を向上させることにハマっており、esportsのダッシュボードなどを作っていました。デプロイはまだまだ赤子です。
            </p>
          </div>
        </section>

        <section id='project' className='w-full bg-gray-50 py-20 px-4'>
          <div className='max-w-full md:max-w-7xl md:mx-auto mx-auto'>
            <h1 className='text-4xl font-bold text-gray-800 mb-8'>
              Project
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {projectData.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <Card className="w-[350px] border border-gray-300 shadow-lg bg-white cursor-pointer overflow-hidden p-0 transform hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-0">
                        <img src={project.image} alt={project.name} className="w-full h-[200px] object-cover" />
                        <div className="p-4">
                          <p className='font-semibold text-lg'>{project.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="min-w-[90vw] max-h-[90vh] w-full overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl border-b pb-2">{project.details?.title || project.name}</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col md:flex-row gap-8 mt-4">
                      <div className="w-full md:w-1/2 flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-auto object-cover rounded-md border border-gray-200"
                        />
                      </div>

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
                            <div className="sm:col-span-2">
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

                    <div className="mt-6 space-y-6">
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
          </div>
        </section>

        <section id='research' className='w-full py-20 px-4'>
          <div className='max-w-full md:max-w-7xl md:mx-auto mx-auto'>
            <h1 className='text-4xl font-bold text-gray-800 mb-8'>
              Research
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              {researchData.map((research) => (
                <Dialog key={research.id}>
                  <DialogTrigger asChild>
                    <Card className="w-[350px] border border-gray-300 shadow-lg bg-white cursor-pointer overflow-hidden p-0 transform hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-0">
                        <img src={research.image} alt={research.name} className="w-full h-[200px] object-cover" />
                        <div className="p-4">
                          <p className='font-semibold text-lg'>{research.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="min-w-[90vw] max-h-[90vh] w-full overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl border-b pb-2">{research.details?.title || research.name}</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col md:flex-row gap-8 mt-4">
                      <div className="w-full md:w-1/2 flex-shrink-0">
                        <img
                          src={research.image}
                          alt={research.name}
                          className="w-full h-auto object-cover rounded-md border border-gray-200"
                        />
                      </div>
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
                    <div className="mt-6 space-y-6">
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
          </div>
        </section>

        <section id='others' className='w-full bg-gray-50 py-20 px-4'>
          <div className='max-w-full md:max-w-7xl md:mx-auto mx-auto'>
            <h1 className='text-4xl font-bold text-gray-800 mb-8'>
              Others
            </h1>
            <div className='flex flex-col md:flex-row gap-8'>
              <div className='w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 pb-8 md:pb-0 md:pr-8'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Awards
                </h2>
                <p className='text-left text-gray-600 leading-relaxed'>
                  2025年7月 可視化情報学会アートコンテスト - 入賞
                  <br />
                  東京メトロの路線ネットワーク図
                </p>
              </div>
              <div className='w-full md:w-1/2 md:pl-8'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                  Skills
                </h2>
                <div className='text-left text-gray-600 leading-relaxed space-y-2'>
                  <p><span className='font-semibold'>プログラミング:</span> JavaScript（React） / Python（Flask）/ SwiftUI</p>
                  <p><span className='font-semibold'>Web開発環境:</span> VSCode, Git</p>
                  <p><span className='font-semibold'>Web:</span> HTML / CSS</p>
                  <p><span className='font-semibold'>データ解析:</span> R</p>
                  <p className='font-semibold mt-2'>補助技術（Working Knowledge）:</p>
                  <p>プログラミング：C++ / Rust / Java</p>
                  <p>デプロイ：FireBase</p>
                  <p>デザイン/プロトタイピング：Figma, TypeScript, Adobe</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-gray-200'>
        <div className='w-full max-w-full md:max-w-7xl md:mx-auto mx-auto'>
          <section id='contact' className='py-20 px-4'>
            <h2 className='text-4xl font-bold text-gray-800 mb-8'>
              Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.02]"
              >
                <Github className="w-12 h-12 text-gray-900" />
                <div>
                  <p className="text-sm font-medium text-gray-500">GitHub</p>
                  <p className="text-xl font-semibold text-gray-900 truncate">@{contactInfo.github.split('/').pop()}</p>
                </div>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-6 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.02]"
              >
                <Mail className="w-12 h-12 text-orange-600" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Address</p>
                  <p className="text-xl font-semibold text-gray-900">{contactInfo.email}</p>
                </div>
              </a>
              <a
                href={contactInfo.Wantedly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-6 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.02]"
              >
                <img src="https://www.wantedly.com/favicon.ico" alt="Wantedly" className="w-12 h-12 object-contain" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Wantedly</p>
                  <p className="text-xl font-semibold text-gray-900">経歴</p>
                </div>
              </a>
              <div className="flex items-center space-x-6 p-5 bg-white rounded-xl shadow-md">
                <MapPin className="w-12 h-12 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Location / Work Style</p>
                  <p className="text-xl font-semibold text-gray-900">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default App
