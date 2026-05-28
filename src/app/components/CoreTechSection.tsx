import { motion } from 'motion/react';
import { Zap, Cog } from 'lucide-react';

const techCards = [
  {
    icon: Zap,
    title: 'Physics & Collision',
    subtitle: '물리 & 충돌',
    features: [
      'Character Movement',
      'Collision Channels',
      'Movement 물리 최적화',
      'ILDamageable 인터페이스 기반 Damage System',
    ],
    gradient: 'from-purple-600 to-pink-600',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    code: `virtual void ReceiveSkillDamage(
  float Damage,
  AActor* DamageCauser,
  ELPlayerSkillID SkillID
) = 0;`,
  },
  {
    icon: Cog,
    title: 'Character Control & FSM',
    subtitle: '캐릭터 제어 및 FSM',
    features: [
      'FSM Architecture',
      'State 기반 캐릭터 구조',
      '유지보수 가능한 구조적 설계',
    ],
    gradient: 'from-blue-600 to-cyan-600',
    glowColor: 'rgba(59, 130, 246, 0.4)',
  },
];

export function CoreTechSection() {
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
            Core Tech & Engineering
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            핵심 기술 구현 사항
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {techCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              {/* Glow effect */}
              <div
                className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: `linear-gradient(to right, ${card.glowColor}, ${card.glowColor})`,
                }}
              />

              {/* Card */}
              <div className="relative h-full bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 flex flex-col">
                {/* Icon and Title */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient} mt-2 flex-shrink-0`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Code snippet if available */}
                {card.code && (
                  <div className="mt-auto">
                    <div className="bg-black/40 rounded-lg p-4 border border-purple-500/20 overflow-x-auto">
                      <pre className="text-xs text-purple-300 font-mono">
                        <code>{card.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
