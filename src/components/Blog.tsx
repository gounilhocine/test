import { useState } from "react";

const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  who: string;
  bg: string;
  date: string;
  read: string;
  img: string;
};

const categories = ["All", "Product", "Workflow", "Design", "Engineering", "Studio"];

const posts: Post[] = [
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
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
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
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blog() {
  const [cat, setCat] = useState("All");
  const [tag, setTag] = useState("All");
  const [query, setQuery] = useState("");
  const [showAllTags, setShowAllTags] = useState(false);
  const featured = posts[0];
  const q = query.trim().toLowerCase();

  const tagCounts = posts.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});
  const tagList = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

  const list = posts.filter((p) => {
    const inCat = cat === "All" || p.category === cat;
    const inTag = tag === "All" || p.category === tag;
    const inQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q);
    return inCat && inTag && inQuery;
  });

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

      <section className="bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-medium uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Blog
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white tracking-tight">Ideas for creative teams</h1>
          <p className="mt-4 text-slate-300 leading-relaxed">Product updates, workflow tips and studio stories — written by the people building FlowSpace.</p>
        </div>
      </section>

      {!q && (
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <a href={`#/blog/${featured.id}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-300 hover:shadow-sm transition-all">
            <img src={featured.img} alt={featured.title} className="w-full h-64 lg:h-full object-cover" />
            <div className="p-6 md:p-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-semibold uppercase tracking-wider">
                <i className="ri-star-line"></i>Featured
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">{featured.title}</h2>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`h-9 w-9 rounded-full ${featured.bg} text-white text-xs flex items-center justify-center font-semibold`}>{featured.who}</div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{featured.author}</p>
                  <p className="text-xs text-slate-500">{featured.date} · {featured.read}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      )}

      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative mb-6">
            <i className="ri-search-line absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles by title, topic or author..."
              className="w-full pl-10 pr-10 py-3 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                title="Clear search"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            )}
          </div>

          <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500">
                <i className="ri-price-tag-3-line text-emerald-600"></i>Browse by topic
              </span>
              {tag !== "All" && (
                <button onClick={() => setTag("All")} className="text-xs text-emerald-600 hover:underline font-medium flex items-center gap-1">
                  <i className="ri-close-line"></i>Clear tag
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setTag("All")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  tag === "All" ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                All topics
                <span className={`text-[11px] px-1.5 rounded-full ${tag === "All" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>{posts.length}</span>
              </button>
              {(showAllTags ? tagList : tagList.slice(0, 4)).map(([t, count]) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    tag === t ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <i className="ri-hashtag text-xs opacity-70"></i>
                  {t}
                  <span className={`text-[11px] px-1.5 rounded-full ${tag === t ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>{count}</span>
                </button>
              ))}
              {tagList.length > 4 && (
                <button
                  onClick={() => setShowAllTags((s) => !s)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border border-dashed border-slate-300 text-slate-500 hover:bg-slate-100 transition-colors"
                >
                  <i className={showAllTags ? "ri-subtract-line" : "ri-add-line"}></i>
                  {showAllTags ? "Show less" : `${tagList.length - 4} more`}
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  cat === c ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p) => (
              <a key={p.id} href={`#/blog/${p.id}`} className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
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

          {list.length === 0 && (
            <div className="text-center py-16">
              <div className="mx-auto h-14 w-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-2xl">
                <i className="ri-search-line"></i>
              </div>
              <p className="mt-4 font-medium text-slate-700">No articles found</p>
              <p className="mt-1 text-sm text-slate-500">Try a different keyword or category.</p>
              <button
                onClick={() => { setQuery(""); setCat("All"); setTag("All"); }}
                className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
              >
                <i className="ri-refresh-line"></i>Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Get new articles in your inbox</h2>
          <p className="mt-3 text-emerald-50">One email a month with workflow ideas and product updates. No spam.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
            <input type="email" required placeholder="you@studio.com" className="flex-1 px-4 py-3 rounded-lg bg-white text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/70" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors">
              Subscribe<i className="ri-arrow-right-line"></i>
            </button>
          </form>
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
