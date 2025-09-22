import LetterGlitch from '../components/LetterGlitch';
import Header from '../components/Header';

export default function SnippetsPage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          glitchColors={['#1a1a1a', '#2d2d2d', '#00ff41']}
          characters="0123456789ABCDEF{}[]();,.<>?/|\\~`!@#$%^&*()_+-="
        />
      </div>
      
      <div className="fixed inset-0 bg-black/60 z-10"></div>
      
      <Header />
      
      <div className="relative z-20 pt-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Pdfs
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Dowload for LLM guides.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">AWS EC2</h3>
              <p className="text-gray-400 mb-4">Setup completo con Docker</p>
              <button className="bg-green-500 text-black px-4 py-2 rounded">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}