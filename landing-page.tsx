import { Button } from "@/components/ui/button";
import { Heart, Smile, Sparkles, Users, BrainCircuit, VirtualReality } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section with animated gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200 py-24 px-6 text-center animate-gradient">
        <div className="absolute inset-0 opacity-10 animate-floating">
          <Sparkles className="absolute w-8 h-8 text-yellow-400" style={{ top: '20%', left: '10%' }} />
          <Sparkles className="absolute w-8 h-8 text-indigo-400" style={{ top: '40%', right: '15%' }} />
          <VirtualReality className="absolute w-12 h-12 text-purple-300 opacity-50" style={{ bottom: '10%', left: '30%' }} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
          Designing the future,<br /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            for those who shaped the past.
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto relative z-10">
          Bringing joy, presence, and simplicity to the elderly through VR and AI. 
          We're building an experience, not just a product.
        </p>
        <div className="mt-10 relative z-10">
          <Button className="text-lg px-6 py-4 rounded-full shadow-xl transform transition hover:scale-105">
            Join the Mission
          </Button>
        </div>
      </section>

      {/* Problem Section with subtle pattern */}
      <section className="relative py-20 px-6 bg-white text-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEg4VjhIMHpNOCA4SDE2VjE2SDh6IiBmaWxsPSIjZjVmNWY2Ii8+PC9zdmc+')]">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        <h2 className="text-3xl font-semibold mb-6 relative">
          The world moved on —<br />
          <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            but many were left behind.
          </span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto relative">
          Most elderly have never touched VR or spoken to an AI. Yet they stand to benefit more than anyone — 
          for connection, stimulation, and support. This isn't about healthcare — it's about presence, joy, and agency.
        </p>
        <BrainCircuit className="w-16 h-16 mx-auto mt-8 text-purple-500 opacity-20" />
      </section>

      {/* Features Section with interactive cards */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          No complexity.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Just magic.
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Sparkles, color: 'indigo', title: 'Plug-and-play VR setups', text: 'Everything just works. No instructions needed.' },
            { icon: Heart, color: 'red', title: 'AI for emotional comfort', text: 'Soft-spoken, helpful, and never overwhelming.' },
            { icon: Smile, color: 'yellow', title: 'Guided experiences', text: 'Designed to spark wonder and recollection.' },
            { icon: Users, color: 'blue', title: 'Co-created solutions', text: 'We build with our users at every step.' },
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-purple-100 border-2 border-transparent"
            >
              <div className="flex items-start gap-4">
                <feature.icon className={`w-8 h-8 mt-1 text-${feature.color}-500 group-hover:animate-pulse`} />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of the sections remain similar but with consistent styling */}
    </div>
  );
}