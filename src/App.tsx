import { Button } from "@/components/ui/button";
import { Heart, Smile, Sparkles, Users, BrainCircuit } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`font-sans ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-6 text-center animate-gradient min-h-[400px]" style={{ backgroundImage: "url('/VR1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 opacity-5 animate-floating">
            <Sparkles className="absolute w-8 h-8 text-yellow-400 dark:text-yellow-300" style={{ top: '20%', left: '10%' }} />
            <Sparkles className="absolute w-8 h-8 text-indigo-400 dark:text-indigo-300" style={{ top: '40%', right: '15%' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 text-black">
            Designing the future, for those who shaped the past.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto relative z-10 text-gray-600">
            Bringing joy, presence, and simplicity to the elderly through VR and AI. We're building an experience, not just a product.
          </p>
          <div className="mt-10 relative z-10">
            <div className="group relative inline-block">
              <Button
                className="text-lg px-6 py-4 rounded-full shadow-xl transform transition hover:scale-105 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                aria-describedby="email-tooltip-hero"
              >
                Join the Mission
              </Button>
              <span
                id="email-tooltip-hero"
                className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] hidden group-hover:block group-focus:block sm:group-hover:block sm:group-focus:block sm:hidden text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md shadow-md transition-opacity duration-200"
              >
                email to: kehsani.goog@gmail.com
              </span>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="relative py-20 px-6 bg-white dark:bg-gray-800 text-center min-h-[400px]" style={{ backgroundImage: "url('/VR3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white dark:from-gray-800 dark:via-gray-800/30 dark:to-gray-800" />
          <h2 className="text-3xl font-semibold mb-6 relative dark:text-white">
            The world moved on — but many were left behind.
          </h2>
          <p className="text-lg max-w-3xl mx-auto relative dark:text-gray-300">
            Most elderly have never touched VR or spoken to an AI. Yet they stand to benefit more than anyone — for connection, stimulation, and support. This isn't about healthcare — it's about presence, joy, and agency.
          </p>
          <BrainCircuit className="w-16 h-16 mx-auto mt-8 text-purple-500 dark:text-purple-400 opacity-20" />
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">No complexity. Just magic.</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="text-indigo-600 dark:text-indigo-300 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1 dark:text-white">Plug-and-play VR setups</h3>
                <p className="text-gray-600 dark:text-gray-300">Everything just works. No instructions needed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Heart className="text-red-500 dark:text-red-300 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1 dark:text-white">AI designed for emotional comfort</h3>
                <p className="text-gray-600 dark:text-gray-300">Soft-spoken, helpful, and never overwhelming.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Smile className="text-yellow-500 dark:text-yellow-300 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1 dark:text-white">Guided experiences for joy & memory</h3>
                <p className="text-gray-600 dark:text-gray-300">Designed to spark wonder and recollection.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-blue-500 dark:text-blue-300 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1 dark:text-white">Built with the elderly, not just for them</h3>
                <p className="text-gray-600 dark:text-gray-300">We co-create with our users at every step.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call for Cofounder */}
        <section className="bg-white dark:bg-gray-800 py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAxKSIvPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMTAgTSAwIDAgTCAxMCAxMCBNIDAgMzAgTCAxMCAyMCBNIDAgMjAgTCAxMCAzMCBNIDIwIDAgTCAzMCAxMCBNIDIwIDEwIEwgMzAgMCBNIDIwIDMwIEwgMzAgMjAgTSAyMCAyMCBMIDMwIDMwIE0gMzAgMCBMIDQwIDEwIE0gMzAgMTAgTCA0MCAwIE0gMzAgMjAgTCA0MCAzMCBNIDMwIDMwIEwgNDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZWRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAxKSIvPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMTAgTSAwIDAgTCAxMCAxMCBNIDAgMzAgTCAxMCAyMCBNIDAgMjAgTCAxMCAzMCBNIDIwIDAgTCAzMCAxMCBNIDIwIDEwIEwgMzAgMCBNIDAgMjAgTCAxMCAzMCBNIDIwIDMwIEwgMzAgMjAgTSAyMCAyMCBMIDMwIDMwIE0gMzAgMCBMIDQwIDEwIE0gMzAgMTAgTCA0MCAwIE0gMzAgMjAgTCA0MCAzMCBNIDMwIDMwIEwgNDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjA1KSI gc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjA1Ii8+PC9svmc+')] opacity-10" />
          <h2 className="text-3xl font-semibold text-center mb-10 relative z-10 dark:text-white">
            This is where you come in.
          </h2>
          <div className="max-w-3xl mx-auto text-lg space-y-4 relative z-10 dark:text-gray-300">
            <p>
              We're not looking for tech wizards. We're looking for someone who cares. Someone who can walk into a room of elders and make them feel seen. If you understand Japanese culture, can listen deeply, and want to help shape the future — we should talk.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>A cofounder or early teammate to lead the business and human side</li>
              <li>Someone who can connect with elderly people and handle real-world interaction</li>
              <li>Strong communication skills, no technical background needed</li>
              <li>Based in Japan or deeply familiar with the culture</li>
              <li>Fresh graduates strongly encouraged</li>
              <li>College degree not required — we care more about empathy than credentials</li>
              <li>Whether you've just graduated or never went to college — if you bring heart, initiative, and cultural understanding, we want to hear from you.</li>
            </ul>
          </div>
          {/* About Us Section */}
          <div className="max-w-3xl mx-auto text-lg space-y-4 relative z-10 dark:text-gray-300 mt-8">
            <h3 className="text-2xl font-semibold text-center dark:text-white">About Us</h3>
            <p>
              We’re a Tokyo-based startup creating joyful VR entertainment experiences for the elderly. Our team blends AI and VR expertise with a shared mission to bring connection and simplicity to seniors. Here’s why you should join us:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Led by Seasoned AI Leadership: Our team is guided by a veteran AI expert with over 20 years of experience and a PhD in AI, ensuring our vision is backed by deep technical and strategic insight.</li>
              <li>Meaningful Mission: We’re focused on enhancing lives through entertainment, not healthcare, making VR accessible and fun for seniors.</li>
              <li>Growth Opportunity: Japan’s silver tech market is booming, and we’re ready to scale with early clients, offering you a chance to make an impact.</li>
            </ul>
          </div>
          <div className="mt-10 text-center relative z-10">
            <div className="group relative inline-block">
              <Button
                className="text-lg px-6 py-4 rounded-full shadow-lg transform transition hover:scale-105 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                aria-describedby="email-tooltip-cofounder"
              >
                Join the Mission
              </Button>
              <span
                id="email-tooltip-cofounder"
                className="absolute left-1/2 -translate-x-1/2 top-[-2.5rem] hidden group-hover:block group-focus:block sm:group-hover:block sm:group-focus:block sm:hidden text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md shadow-md transition-opacity duration-200"
              >
                email to: kehsani.goog@gmail.com
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 py-10 text-center text-sm text-gray-500 dark:text-gray-400 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-gray-800/50" />
          <p className="relative z-10" style={{ fontSize: '1.059rem', transform: 'translateY(-1.3125rem)' }}>
            "We're a small group with a big vision. Come shape it with us."
          </p>
        </footer>
      </div>
    </div>
  );
}