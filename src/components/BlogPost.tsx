const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

import { posts } from "../lib/posts";

const _unusedPosts = [
  {
    id: 1,
    title: "Introducing Sprint 14: smarter time tracking",
    excerpt: "Live timers now auto-detect the task you are working on and pre-fill billable hours, so invoicing happens on its own.",
    category: "Product",
    author: "Marc Rivière",
    who: "MR",
    bg: "bg-emerald-500",
    date: "May 27, 2025",
    read: "6 min read",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "How we cut our weekly reporting time by 38%",
    excerpt: "A behind-the-scenes look at the workflow changes that let our studio close the week in under an hour.",
    category: "Workflow",
    author: "Sarah Jenkins",
    who: "SJ",
    bg: "bg-emerald-600",
    date: "May 21, 2025",
    read: "8 min read",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Designing calm interfaces for busy teams",
    excerpt: "Why fewer clicks, softer contrast and honest empty states make creative tools feel effortless.",
    category: "Design",
    author: "Nina Costa",
    who: "NC",
    bg: "bg-emerald-600",
    date: "May 14, 2025",
    read: "5 min read",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Scaling our API to 12,000 workspaces",
    excerpt: "The architecture decisions, caching layers and lessons learned while growing FlowSpace's backend.",
    category: "Engineering",
    author: "Alex Laurent",
    who: "AL",
    bg: "bg-slate-700",
    date: "May 7, 2025",
    read: "10 min read",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "From idea to invoice: a studio's full cycle",
    excerpt: "Follow a real project through FlowSpace — from the first brief to the final paid invoice.",
    category: "Studio",
    author: "Sarah Jenkins",
    who: "SJ",
    bg: "bg-emerald-600",
    date: "Apr 29, 2025",
    read: "7 min read",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    title: "Kanban tips for creative sprints",
    excerpt: "Six small board habits that keep designers, developers and clients perfectly in sync.",
    category: "Workflow",
    author: "Marc Rivière",
    who: "MR",
    bg: "bg-emerald-500",
    date: "Apr 22, 2025",
    read: "4 min read",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
];
void _unusedPosts;

const body = [
  {
    h: "Why this matters",
    p: "Creative teams lose hours every week switching between boards, timers and spreadsheets. Sprint 14 closes that gap by connecting the work you do to the hours you bill — automatically, in the background.",
  },
  {
    h: "What changed",
    p: "Timers now detect the task you have open and pre-fill the description, project and billable rate. When you stop a timer, the entry lands in your weekly report and is ready to be pulled into an invoice.",
  },
  {
    h: "How to try it",
    p: "Open any task from your Kanban board and hit the play button. The timer starts with the right context already filled in. You can always edit the entry before saving it.",
  },
];

const tags = ["Time tracking", "Product", "Invoicing", "Sprint 14"];

export default function BlogPost({ id }: { id: number }) {
  const post = posts.find((p) => p.id === id) ?? posts[0];
  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-2.5">
            <img src={LOGO} alt="FlowSpace" className="h-11 w-11 object-contain" />
            <span className="font-semibold tracking-tight text-slate-900">FlowSpace</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#/" className="hover:text-emerald-600 transition-colors">Home</a>
            <a href="#/blog" className="text-emerald-600 font-medium">Blog</a>
            <a href="#/about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#/contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </nav>
          <a href="#/app" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors">
            Open app<i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src={post.img} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90"></div>
        <div className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <a href="#/blog" className="inline-flex items-center gap-1.5 text-sm text-emerald-300 hover:text-white transition-colors">
            <i className="ri-arrow-left-line"></i>Back to blog
          </a>
          <span className="mt-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">{post.title}</h1>
          <div className="mt-6 flex items-center gap-3">
            <div className={`h-10 w-10 rounded-full ${post.bg} text-white text-xs flex items-center justify-center font-semibold`}>{post.who}</div>
            <div>
              <p className="text-sm font-medium text-white">{post.author}</p>
              <p className="text-xs text-slate-300">{post.date} · {post.read}</p>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <p className="text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
          <div className="mt-10 space-y-8">
            {body.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{s.h}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-4 border-emerald-500 bg-slate-50 rounded-r-xl p-6">
            <p className="text-lg font-medium text-slate-800 leading-relaxed italic">
              "The best tools disappear. You should only notice the work getting done."
            </p>
            <footer className="mt-3 text-sm text-slate-500">— {post.author}, FlowSpace</footer>
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{t}</span>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className={`h-14 w-14 rounded-full ${post.bg} text-white text-sm flex items-center justify-center font-semibold shrink-0`}>{post.who}</div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-slate-900">{post.author}</p>
              <p className="text-sm text-slate-500 leading-relaxed">Writes about creative workflows, product design and the craft of shipping calm software.</p>
            </div>
            <a href="#/contact" className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors shrink-0">
              Get in touch<i className="ri-mail-line"></i>
            </a>
          </div>
        </div>
      </article>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Related articles</h2>
            <a href="#/blog" className="text-sm text-emerald-600 hover:underline font-medium flex items-center gap-1">
              All articles<i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <a key={p.id} href={`#/blog/${p.id}`} className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-white/90 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider">{p.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-full ${p.bg} text-white text-[10px] flex items-center justify-center font-semibold`}>{p.who}</div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-800 truncate">{p.author}</p>
                      <p className="text-[11px] text-slate-500">{p.date} · {p.read}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <img src={LOGO} alt="FlowSpace" className="h-10 w-10 object-contain" />
            <span className="text-white font-semibold">FlowSpace</span>
          </div>
          <span className="flex items-center gap-4">
            <a href="#/" className="hover:text-white transition-colors">Home</a>
            <a href="#/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="#/about" className="hover:text-white transition-colors">About</a>
            <a href="#/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#/contact" className="hover:text-white transition-colors">Contact</a>
          </span>
          <span>(c) 2025 FlowSpace. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
