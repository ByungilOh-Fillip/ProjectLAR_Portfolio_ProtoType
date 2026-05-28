import { motion } from 'motion/react';
import { GitBranch, GitPullRequest, Eye, Users, AlertCircle } from 'lucide-react';

const pipelineSteps = [
  {
    icon: GitBranch,
    title: 'GitHub Branch Workflow',
    description: '체계적인 브랜치 관리 전략',
  },
  {
    icon: GitPullRequest,
    title: 'Pull Requests',
    description: '코드 통합 프로세스',
  },
  {
    icon: Eye,
    title: 'Code Review',
    description: '동료 검토 시스템',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: '팀 협업 구조 강조',
  },
  {
    icon: AlertCircle,
    title: 'GitHub Issues',
    description: '에러 및 인사이트 공유',
  },
];

export function PipelineSection() {
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
            Development Pipeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            체계적인 개발 프로세스
          </p>
        </motion.div>

        {/* Pipeline flow */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 -translate-y-1/2" />

          <div className="grid md:grid-cols-5 gap-8 relative">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500" />

                {/* Card */}
                <div className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Build.cs optimization info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative bg-[rgba(15,15,25,0.9)] backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">
              Module Accessibility Optimization
            </h3>
            <p className="text-muted-foreground mb-4">
              Build.cs에서 <code className="text-purple-400">PublicIncludePaths</code>를 설정하여
              모듈 간 헤더 참조의 복잡성을 해결하고 빌드 효율성을 개선했습니다.
            </p>
            <div className="bg-black/40 rounded-lg p-4 border border-purple-500/20 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono">
                <code>{`PublicIncludePaths.AddRange(new string[] {
  "ProjectLAR/Public/Player",
  // ... more paths
});`}</code>
              </pre>
            </div>
            <p className="text-muted-foreground mt-4">
              <span className="text-blue-400 font-semibold">6개의 핵심 모듈</span>을
              SRP(Single Responsibility Principle) 기반으로 분리 설계
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
