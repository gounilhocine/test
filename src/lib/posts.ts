export type Post = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  who: string;
  bg: string;
  date: string;
  iso: string;
  read: string;
  img: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Introducing Sprint 14: smarter time tracking",
    excerpt: "Live timers now auto-detect the task you are working on and pre-fill billable hours, so invoicing happens on its own.",
    category: "Product",
    author: "Marc Rivière",
    who: "MR",
    bg: "bg-emerald-500",
    date: "May 27, 2025",
    iso: "2025-05-27",
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
    iso: "2025-05-21",
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
    iso: "2025-05-14",
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
    iso: "2025-05-07",
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
    iso: "2025-04-29",
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
    iso: "2025-04-22",
    read: "4 min read",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
];

export function getPost(id: number): Post {
  return posts.find((p) => p.id === id) ?? posts[0];
}
