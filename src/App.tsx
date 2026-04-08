/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Search, 
  Palette, 
  Settings, 
  Rocket, 
  Megaphone, 
  BarChart3, 
  ArrowRight, 
  Download,
  CheckCircle2,
  Star,
  Zap,
  Globe,
  MessageSquare,
  FileText,
  Lightbulb,
  ExternalLink,
  Circle
} from "lucide-react";

const ROLES = [
  {
    role: "开发者",
    subtitle: "Developer",
    icon: <Settings className="w-5 h-5" />,
    color: "text-emerald-600",
    skills: ["vercel-react-best-practices", "anthropics/skills", "systematic-debugging", "mcp-builder"],
    targetPhase: "phase-3"
  },
  {
    role: "产品经理",
    subtitle: "Product Manager",
    icon: <Search className="w-5 h-5" />,
    color: "text-blue-600",
    skills: ["prd", "brainstorming", "seo-audit", "agent-browser", "analytics-tracking"],
    targetPhase: "phase-1"
  },
  {
    role: "设计师",
    subtitle: "Designer",
    icon: <Palette className="w-5 h-5" />,
    color: "text-purple-600",
    skills: ["frontend-design", "web-design-guidelines", "ui-ux-pro-max", "theme-factory"],
    targetPhase: "phase-2"
  },
  {
    role: "运营/市场",
    subtitle: "Marketing & Ops",
    icon: <Rocket className="w-5 h-5" />,
    color: "text-orange-600",
    skills: ["marketingskills", "copywriting", "launch-strategy", "social-content"],
    targetPhase: "phase-4"
  }
];

const PHASES = [
  {
    id: "phase-1",
    number: "01",
    title: "需求分析与产品策略",
    subtitle: "Phase 1 — Discovery & Strategy",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
    skills: [
      { rank: "#62", name: "brainstorming", author: "obra/superpowers", installs: "79.9K", value: "结构化多维度发散创意", usage: "需求评审前，从用户/竞品/技术/商业4个视角扩展功能创意，输出20+方向" },
      { rank: "#79", name: "writing-plans", author: "obra/superpowers", installs: "43.1K", value: "执行前先写计划，防止跑偏", usage: "写 PRD 前先生成文档大纲草稿，再逐块填充细节" },
      { rank: "#240", name: "prd", author: "github/awesome-copilot", installs: "12.4K", value: "专用 PRD 生成器", usage: "输入\"一句话功能描述\"，自动生成完整 PRD 框架，初稿时间从2小时压缩到15分钟" },
      { rank: "#253", name: "planning-with-files", author: "othmanadi", installs: "11.7K", value: "把文档转化为可执行计划", usage: "上传用户访谈文字稿，提炼痛点并生成需求优先级矩阵" },
      { rank: "#NEW", name: "agent-browser", author: "anthropics/skills", installs: "15.2K", value: "AI 驱动的浏览器自动化", usage: "自动化执行竞品调研、数据抓取和交互测试，极大提升 PM 调研效率" },
    ]
  },
  {
    id: "phase-2",
    number: "02",
    title: "设计与原型",
    subtitle: "Phase 2 — Design & Prototyping",
    icon: <Palette className="w-6 h-6" />,
    color: "bg-purple-500",
    skills: [
      { rank: "#3", name: "frontend-design", author: "anthropics/skills", installs: "218.5K", value: "生产级 UI 代码，高颜值", usage: "设计描述喂给 Claude，直接产出可交互 HTML/React 原型，用于用研测试" },
      { rank: "#4", name: "web-design-guidelines", author: "vercel-labs", installs: "210.6K", value: "统一设计规范约束", usage: "建立团队设计系统文档，确保 AI 生成界面符合产品规范" },
      { rank: "#60", name: "ui-ux-pro-max", author: "nextlevelbuilder", installs: "89.2K", value: "高级 UX 评审能力", usage: "线框图评审时，让 Claude 指出信息层级、操作路径、可访问性问题" },
      { rank: "#160", name: "theme-factory", author: "anthropics/skills", installs: "20.9K", value: "一键生成视觉主题系统", usage: "输入品牌关键词，输出 Tailwind/CSS 变量配置文件" },
      { rank: "#165", name: "brand-guidelines", author: "anthropics/skills", installs: "19.8K", value: "品牌规范生成与维护", usage: "建立品牌知识库，所有对外物料通过 Claude 生成时自动遵循规范" },
    ]
  },
  {
    id: "phase-3",
    number: "03",
    title: "开发与测试",
    subtitle: "Phase 3 — Development & QA",
    icon: <Settings className="w-6 h-6" />,
    color: "bg-emerald-500",
    skills: [
      { rank: "#2", name: "vercel-react-best-practices", author: "vercel-labs", installs: "261.1K", value: "React 最佳实践约束", usage: "写代码时自动应用规范，减少 Code Review 低级错误" },
      { rank: "#77", name: "systematic-debugging", author: "obra/superpowers", installs: "44.2K", value: "系统化排查 Bug", usage: "难以复现的 Bug，让 Claude 输出假设清单和验证方法" },
      { rank: "#85", name: "test-driven-development", author: "obra/superpowers", installs: "37.1K", value: "TDD 工作流", usage: "先让 Claude 写测试用例，再实现功能，减少回归问题" },
      { rank: "#86", name: "webapp-testing", author: "anthropics/skills", installs: "35.8K", value: "全链路测试策略", usage: "自动生成验收测试脚本，产品经理可直接用来验收功能" },
      { rank: "#119", name: "mcp-builder", author: "anthropics/skills", installs: "29.3K", value: "构建 AI 工具集成", usage: "将 Jira、数据平台等内部系统封装为 MCP 服务供 Claude 调用" },
      { rank: "#249", name: "documentation-writer", author: "github/awesome-copilot", installs: "11.9K", value: "代码文档自动生成", usage: "代码写完后自动生成文档，解决团队文档欠债问题" },
    ]
  },
  {
    id: "phase-4",
    number: "04",
    title: "发布与营销策略",
    subtitle: "Phase 4 — Launch & Marketing",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-orange-500",
    skills: [
      { rank: "#67", name: "seo-audit", author: "coreyhaines31", installs: "59.8K", value: "全面 SEO 体检", usage: "产品上线前做 SEO 审计，也可对竞品做逆向分析" },
      { rank: "#114", name: "pricing-strategy", author: "coreyhaines31", installs: "31.0K", value: "科学定价分析", usage: "输入竞品列表，输出定价建议和套餐结构方案" },
      { rank: "#112", name: "product-marketing-context", author: "coreyhaines31", installs: "31.9K", value: "产品营销知识库", usage: "建立统一的产品定位文档，确保所有营销内容叙事一致" },
      { rank: "#121", name: "page-cro", author: "coreyhaines31", installs: "28.6K", value: "落地页转化优化", usage: "上线前 Claude 审查落地页，输出转化漏斗分析和优化建议" },
      { rank: "#126", name: "launch-strategy", author: "coreyhaines31", installs: "27.7K", value: "完整 GTM 上市计划", usage: "输入产品特点，自动生成发布时间线、渠道矩阵、KPI 体系" },
      { rank: "#170", name: "ad-creative", author: "coreyhaines31", installs: "19.0K", value: "广告文案批量生成", usage: "批量生成10+文案变体用于 A/B 测试，数据驱动找最优创意" },
    ]
  },
  {
    id: "phase-5",
    number: "05",
    title: "内容创作与自媒体运营",
    subtitle: "Phase 5 — Content & Social",
    icon: <Megaphone className="w-6 h-6" />,
    color: "bg-pink-500",
    skills: [
      { rank: "#73", name: "copywriting", author: "coreyhaines31", installs: "51.6K", value: "AIDA/PAS 专业文案", usage: "活动文案、功能介绍、App Store 描述等场景" },
      { rank: "#92", name: "content-strategy", author: "coreyhaines31", installs: "34.1K", value: "内容日历与分发策略", usage: "制定季度内容计划，覆盖公众号/小红书/微博主题矩阵" },
      { rank: "#103", name: "social-content", author: "coreyhaines31", installs: "33.0K", value: "多平台内容适配", usage: "同一主题，一键生成公众号长文版、小红书图文版、微博短评版" },
      { rank: "#117", name: "copy-editing", author: "coreyhaines31", installs: "29.7K", value: "对外内容质量把关", usage: "所有对外发布内容发布前，最终质量检查" },
      { rank: "#75", name: "pptx", author: "anthropics/skills", installs: "50.7K", value: "PowerPoint 文件生成", usage: "产品路线图、季度汇报、Pitch Deck 直接产出 pptx 文件" },
      { rank: "#78", name: "docx", author: "anthropics/skills", installs: "43.5K", value: "Word 文档生成", usage: "PRD、方案书、合同模板一键生成专业格式" },
      { rank: "#189", name: "baoyu-post-to-wechat", author: "jimliu", installs: "15.8K", value: "微信公众号发布优化", usage: "文章写好后自动格式化为公众号最佳排版" },
      { rank: "#208", name: "baoyu-xhs-images", author: "jimliu", installs: "14.0K", value: "小红书图文生成", usage: "产品内容自动转化为小红书风格竖版图文笔记" },
    ]
  },
  {
    id: "phase-6",
    number: "06",
    title: "增长与数据运营",
    subtitle: "Phase 6 — Growth & Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-cyan-500",
    skills: [
      { rank: "#84", name: "marketing-psychology", author: "coreyhaines31", installs: "37.7K", value: "行为经济学应用", usage: "优化注册/付费转化页，应用稀缺性、社会证明等心理原则" },
      { rank: "#94", name: "programmatic-seo", author: "coreyhaines31", installs: "33.8K", value: "批量生成 SEO 落地页", usage: "基于关键词矩阵批量生成长尾落地页，低成本获流量" },
      { rank: "#123", name: "analytics-tracking", author: "coreyhaines31", installs: "28.4K", value: "数据埋点方案设计", usage: "新功能上线前系统设计埋点，确保关键行为数据不遗漏" },
      { rank: "#135", name: "referral-program", author: "coreyhaines31", installs: "25.9K", value: "裂变推荐体系设计", usage: "设计用户邀请裂变激励机制和传播链路" },
      { rank: "#136", name: "free-tool-strategy", author: "coreyhaines31", installs: "25.9K", value: "免费工具获客策略", usage: "规划免费工具矩阵，低成本获取精准用户" },
      { rank: "#139", name: "signup-flow-cro", author: "coreyhaines31", installs: "25.5K", value: "注册流程转化优化", usage: "系统优化注册漏斗，找流失节点并输出改进方案" },
      { rank: "#175", name: "churn-prevention", author: "coreyhaines31", installs: "18.1K", value: "用户流失预防", usage: "分析流失模式，生成针对性挽留方案和触达话术" },
      { rank: "#159", name: "ai-seo", author: "coreyhaines31", installs: "20.9K", value: "AI 搜索时代 SEO", usage: "让产品内容在 ChatGPT/Perplexity 等 AI 搜索中被推荐" },
    ]
  }
];

const OBSERVATIONS = [
  {
    title: "最高价值的 3 个 Skill 包",
    content: "coreyhaines31/marketingskills（统治营销/增长阶段）、obra/superpowers（开发与产品思维工作流）、anthropics/skills（设计和文档生产力）。",
    icon: <Zap className="w-5 h-5 text-yellow-500" />
  },
  {
    title: "中国本土运营特别推荐",
    content: "jimliu/baoyu-skills 整个包，专门针对微信公众号、小红书、X（Twitter）等平台做了深度适配，这在全球 Skills 市场里是稀缺资源。",
    icon: <Globe className="w-5 h-5 text-blue-500" />
  },
  {
    title: "PM 必装优先级",
    content: "prd + brainstorming + agent-browser + analytics-tracking + pricing-strategy，这5个 Skill 覆盖了产品经理80%的高频场景。",
    icon: <Star className="w-5 h-5 text-purple-500" />
  }
];

export default function App() {
  const scrollToPhase = (phaseId: string) => {
    const element = document.getElementById(phaseId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = "bufeiskill";
    window.print();
    document.title = originalTitle;
  };

  const openSkillDetail = (author: string, name: string) => {
    window.open(`https://skills.sh/${author}/${name}`, '_blank');
  };

  const findSkillAndOpen = (skillName: string) => {
    // Search through PHASES to find the author
    for (const phase of PHASES) {
      const skill = phase.skills.find(s => s.name === skillName || s.name === skillName.split(' ')[0]);
      if (skill) {
        openSkillDetail(skill.author, skill.name);
        return;
      }
    }
    // Fallback if not found in PHASES (e.g. some role-specific skills)
    // Most skills in ROLES are in PHASES, but some might be generic
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-blue-100 scroll-smooth">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          title { display: none; }
          head title { display: none; }
        }
      ` }} />
      {/* Container with fixed width for infographic feel */}
      <div className="max-w-[750px] mx-auto bg-white shadow-2xl overflow-hidden min-h-screen relative">
        
        {/* Header */}
        <header className="pt-20 pb-12 px-10 text-center border-b border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold tracking-wider uppercase text-gray-600 mb-6">
              Product Lifecycle Skills Map
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-4 leading-tight">
              产品全生命周期<br />
              <span className="text-[#AE3925]">
                Skills 地图
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
              基于 skills.sh 完整榜单 (Top 60+ 精选) 的全链路产品能力指南
            </p>
          </motion.div>
        </header>

        {/* Role-based Quick Access */}
        <section className="px-8 py-10 bg-gray-50/50 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="w-6 h-6 text-[#AE3925]" />
            <h2 className="text-2xl font-bold">角色化工具箱推荐</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ROLES.map((role, idx) => (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollToPhase(role.targetPhase)}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-[#AE3925]/30 group/role"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gray-50 ${role.color} group-hover/role:bg-gray-100 transition-colors`}>
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm group-hover/role:text-[#AE3925] transition-colors">{role.role}</h3>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{role.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map(s => (
                    <span 
                      key={s} 
                      onClick={(e) => {
                        e.stopPropagation();
                        findSkillAndOpen(s);
                      }}
                      className="text-[10px] bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100 group-hover/role:bg-white group-hover/role:border-gray-200 transition-colors hover:bg-gray-100 hover:text-[#AE3925] hover:border-[#AE3925]/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-[#AE3925] opacity-0 group-hover/role:opacity-100 transition-opacity">
                  <span>查看详情</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <main className="px-8 py-12 space-y-16">
          {PHASES.map((phase, phaseIdx) => (
            <section key={phase.id} id={phase.id} className="relative scroll-mt-10">
              {/* Phase Header */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">Phase {phase.number}</span>
                    <div className="h-px w-8 bg-gray-200"></div>
                  </div>
                  <h2 className="text-2xl font-bold">{phase.title}</h2>
                  <p className="text-sm text-gray-400 font-medium">{phase.subtitle}</p>
                </div>
              </motion.div>

              {/* Skills List */}
              <div className="space-y-4">
                {phase.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.05 }}
                    onClick={() => openSkillDetail(skill.author, skill.name)}
                    className="group bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 rounded-2xl p-5 border border-transparent hover:border-gray-100 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-gray-500 bg-white px-2 py-1 rounded-md border border-gray-100">
                          {skill.rank}
                        </span>
                        <h3 className="font-bold text-lg group-hover:text-[#AE3925] transition-colors">
                          `{skill.name}`
                        </h3>
                        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                          {skill.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-gray-50 group-hover:text-[#AE3925] transition-colors">
                          <Download className="w-3 h-3" />
                          {skill.installs}
                        </div>
                        <div className="p-1.5 rounded-full bg-gray-100 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:bg-[#AE3925] group-hover:text-white transition-all duration-300">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-start gap-2">
                        <Circle className="w-2.5 h-2.5 text-[#9C9481] mt-1.5 shrink-0" strokeWidth={3} />
                        <p className="text-sm font-semibold text-gray-800">{skill.value}</p>
                      </div>
                      <div className="flex items-start gap-2 pl-6">
                        <ArrowRight className="w-3 h-3 text-gray-400 mt-1 shrink-0" />
                        <p className="text-xs text-gray-600 leading-relaxed">{skill.usage}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}

          {/* Key Observations Section */}
          <section className="pt-12 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold">几个关键观察</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {OBSERVATIONS.map((obs, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-3xl p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-bold text-lg">{obs.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {obs.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 px-10 bg-gray-50 text-center border-t border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
            Designed for Product Managers & Creators
          </p>
          <div className="flex justify-center gap-6 text-gray-300">
            <FileText className="w-5 h-5" />
            <MessageSquare className="w-5 h-5" />
            <Settings className="w-5 h-5" />
          </div>
          <p className="mt-8 text-[10px] text-gray-400">
            © 2026 Skills Map. Based on skills.sh data.
          </p>
        </footer>

        {/* Floating Action (Visual only) */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-3 print:hidden">
          <button 
            onClick={handlePrint}
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
            title="Print / Save as PDF"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
