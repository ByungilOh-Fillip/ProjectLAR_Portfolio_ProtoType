import { motion } from 'motion/react';
import { Rocket, Target, Zap, Check, Map } from 'lucide-react';

const alphaPlan = {
  common: [
    'Animation - AimOffset',
    'Collision 병합',
    'Hit Feedback (타격감) 및 Polishing',
  ],
  player: [
    'Identity',
    'Awakening Skill',
    'Counter',
    'Telegraph',
    'Animation',
    'Collision',
  ],
  boss: [
    'CombatComponent',
    'Special Pattern',
    'Animation',
    'Collision',
    'Telegraph',
  ],
  levelDesign: [
    'Environment Design',
    'Landscape Construction',
    'Level Layout',
    'Combat Arena Optimization',
  ],
};

export function AlphaPlanSection() {
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
            Alpha Plan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            향후 개발 로드맵
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Common Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">공통 (Common)</h3>
              </div>
              <ul className="space-y-3">
                {alphaPlan.common.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Player Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Player</h3>
              </div>
              <ul className="space-y-3">
                {alphaPlan.player.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Boss Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Boss</h3>
              </div>
              <ul className="space-y-3">
                {alphaPlan.boss.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Level Design Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center shadow-lg">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Level Design</h3>
              </div>
              <ul className="space-y-3">
                {alphaPlan.levelDesign.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full">
            <p className="text-sm text-muted-foreground">
              Built with{' '}
              <span className="text-purple-400 font-semibold">Unreal Engine 5</span>
              {' '}| Tech Portfolio & Development Archive
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
