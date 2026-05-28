import { motion } from 'motion/react';
import { Github, User, Sword, Crown, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jaehyun',
    role: 'Player',
    icon: Sword,
    responsibilities: ['UI', 'Combat', 'Skills', 'Movement', 'FSM'],
    skills: ['Blink', 'Casting', 'Skill Cooldown'],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Byungil',
    role: 'Boss',
    icon: Crown,
    responsibilities: ['Movements', 'FSM', 'Combat', 'LogIntegrated', 'Pattern'],
    skills: [],
    gradient: 'from-blue-600 to-cyan-600',
  },
];

export function TeamSection() {
  return (
    <section
      data-section
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Team & GitHub
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            팀 구성 및 역할 분담
          </p>
        </motion.div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />

              {/* Card */}
              <div className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">
                      Responsibilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.responsibilities.map((resp) => (
                        <span
                          key={resp}
                          className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs"
                        >
                          {resp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.skills.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-blue-300 mb-2">
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What made in Prototype */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative group mb-12"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">What Made in Prototype</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Player System</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">기본 이동 및 회피 (WASD + Shift)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">스킬 시스템 프로토타입 (Q, E, R)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">FSM 기반 상태 관리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">기본 UI 프레임워크</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">Boss System</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">기본 AI 패턴 구현</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">FSM 기반 보스 상태 전환</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">충돌 검출 시스템</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">데미지 시스템 프로토타입</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub Repository Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
          <a
            href="https://github.com/soloplayer-tech/ProjectLAR"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-between group/link block"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 group-hover/link:text-purple-400 transition-colors">
                  GitHub Repository
                </h3>
                <p className="text-sm text-muted-foreground">
                  github.com/soloplayer-tech/ProjectLAR
                </p>
              </div>
            </div>
            <div className="text-purple-400 group-hover/link:translate-x-2 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
