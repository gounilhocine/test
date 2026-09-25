import { useEffect } from "react";
import { posts } from "./posts";

const SITE = "https://flowspace.app";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";

const LOGO = "https://1ycb7c7j3ycczejvynpy.helloreaddy.com/storage/v1/object/sign/public/logos/agile-task-manger-1790242782755-0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjEyMDM4Mi00MmRlLTQ4ZDctYjZlNS00MzkxMjExODYxYTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdWJsaWMvbG9nb3MvYWdpbGUtdGFzay1tYW5nZXItMTc5MDI0Mjc4Mjc1NS0wLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAyNDI3ODMsImV4cCI6MTgyMTc3ODc4M30.eeoMrgzjXE2rdebPi0NHcubnTTn2gKZgAm732UInGhg";

type Meta = {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
};

const ORG = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "FlowSpace",
  url: `${SITE}/`,
  logo: LOGO,
  description: "All-in-one project management workspace for creative teams.",
  sameAs: ["https://twitter.com/flowspace", "https://www.linkedin.com/company/flowspace"],
};

const PAGES: Record<string, Meta> = {
  "/": {
    title: "FlowSpace — Project Management for Creative Teams",
    description:
      "FlowSpace is the all-in-one workspace for creative teams: Kanban boards, live time tracking, invoicing and reports. Plan, produce and get paid in one calm place.",
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ORG,
        {
          "@type": "WebSite",
          "@id": `${SITE}/#website`,
          url: `${SITE}/`,
          name: "FlowSpace",
          publisher: { "@id": `${SITE}/#organization` },
        },
        {
          "@type": "SoftwareApplication",
          name: "FlowSpace",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "1240" },
        },
      ],
    },
  },
  "/about": {
    title: "About FlowSpace — Built by a Studio, for Studios",
    description:
      "FlowSpace started as an internal tool in a Parisian design studio. Discover our mission, milestones and the team behind the product.",
    path: "/about",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About FlowSpace",
      url: `${SITE}/#/about`,
      publisher: { "@id": `${SITE}/#organization` },
    },
  },
  "/blog": {
    title: "Blog — Workflow Ideas for Creative Teams | FlowSpace",
    description:
      "Product updates, workflow tips and studio stories written by the people building FlowSpace.",
    path: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "FlowSpace Blog",
      url: `${SITE}/#/blog`,
      publisher: { "@id": `${SITE}/#organization` },
    },
  },
  "/contact": {
    title: "Contact FlowSpace — Sales, Demo & Support",
    description:
      "Questions about pricing, a demo or a custom setup? Contact the FlowSpace team — we reply within one business day.",
    path: "/contact",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact FlowSpace",
      url: `${SITE}/#/contact`,
      publisher: { "@id": `${SITE}/#organization` },
    },
  },
  "/privacy": {
    title: "Privacy Policy | FlowSpace",
    description:
      "Learn what data FlowSpace collects, how we use it, and the rights you have over your personal information under the GDPR.",
    path: "/privacy",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      url: `${SITE}/#/privacy`,
      publisher: { "@id": `${SITE}/#organization` },
    },
  },
  "/terms": {
    title: "Terms of Service | FlowSpace",
    description:
      "Read the terms and conditions that govern your use of the FlowSpace platform, subscriptions and acceptable use policy.",
    path: "/terms",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Terms of Service",
      url: `${SITE}/#/terms`,
      publisher: { "@id": `${SITE}/#organization` },
    },
  },
};

function upsert(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function setJsonLd(data: Record<string, unknown> | undefined) {
  const id = "route-jsonld";
  document.getElementById(id)?.remove();
  if (!data) return;
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = id;
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
}

function resolve(route: string): Meta {
  if (route.startsWith("/blog/")) {
    const id = Number(route.split("/")[2]);
    const post = posts.find((p) => p.id === id) ?? posts[0];
    return {
      title: `${post.title} | FlowSpace Blog`,
      description: post.excerpt,
      path: `/blog/${post.id}`,
      type: "article",
      image: post.img,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `${SITE}/#/blog/${post.id}`,
        datePublished: post.iso,
        articleSection: post.category,
        author: { "@type": "Person", name: post.author },
        publisher: { "@id": `${SITE}/#organization` },
      },
    };
  }
  return PAGES[route] ?? PAGES["/"];
}

export function useSeo(route: string) {
  useEffect(() => {
    const meta = resolve(route);
    const url = `${SITE}/#${meta.path === "/" ? "/" : meta.path}`;
    const image = meta.image ?? OG_IMAGE;

    document.title = meta.title;
    upsert('meta[name="description"]', { name: "description", content: meta.description });
    upsert('link[rel="canonical"]', { rel: "canonical", href: url });

    upsert('meta[property="og:title"]', { property: "og:title", content: meta.title });
    upsert('meta[property="og:description"]', { property: "og:description", content: meta.description });
    upsert('meta[property="og:url"]', { property: "og:url", content: url });
    upsert('meta[property="og:type"]', { property: "og:type", content: meta.type ?? "website" });
    upsert('meta[property="og:image"]', { property: "og:image", content: image });

    upsert('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
    upsert('meta[name="twitter:description"]', { name: "twitter:description", content: meta.description });
    upsert('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    setJsonLd(meta.jsonLd);
  }, [route]);
}
