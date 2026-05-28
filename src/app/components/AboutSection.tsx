import { motion } from 'motion/react';
import { Code2, Cpu, GitBranch, Zap, Box, Flame } from 'lucide-react';

const techStack = [
  { name: 'UE5', icon: Box },
  { name: 'C++', icon: Code2 },
  { name: 'Blueprint', icon: Cpu },
  { name: 'FSM', icon: Zap },
  { name: 'Collision', icon: Box },
  { name: 'GitHub', icon: GitBranch },
  { name: 'VFX', icon: Flame },
];

export function AboutSection() {
  return (
    <section
      id="about"
      data-section
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About the Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8" />
        </motion.div>

        {/* Glass morphism card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
          <div className="relative bg-[rgba(15,15,25,0.8)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-12 hover:border-purple-500/40 transition-all duration-300">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-purple-400 font-semibold">ProjectLAR</span>은
                Unreal Engine 5 기반의 2차 팀 프로젝트로, 게임{' '}
                <span className="text-blue-400 font-semibold">"Lost Ark"</span>의
                클론 코딩을 통해 전투 씬 한 사이클을 완성하는 것을 목표로 합니다.
              </p>
              <p className="text-muted-foreground">
                본 프로젝트는 최종 발표, 포트폴리오 전시, 기술 아카이빙을 목적으로 하며,
                심사위원 및 평가자를 대상으로 한 기술적 완성도와 엔지니어링 역량을 중점적으로 보여줍니다.
              </p>
              <p className="text-muted-foreground">
                Unreal Engine 5의 최신 기술을 활용하여 고품질의 전투 시스템,
                물리 기반 캐릭터 컨트롤, FSM 아키텍처 등을 구현하였습니다.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer group"
                  >
                    <tech.icon className="w-8 h-8 text-purple-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
