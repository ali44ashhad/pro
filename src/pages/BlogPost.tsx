import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { getPost, posts, formatDate } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageShell>
      <Seo
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            date: post.date,
            slug: post.slug,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Article header */}
      <section className="bg-foreground pt-28 sm:pt-32 pb-14">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-background/60 hover:text-background mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((t) => (
                <span key={t} className="text-xs font-medium text-primary-foreground bg-primary px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="heading-display text-background mb-5">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-background/60">
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readMinutes} min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <article className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-body-lg text-muted-foreground border-l-4 border-primary pl-5 mb-10">
              {post.excerpt}
            </p>

            <div className="space-y-8">
              {post.body.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">{block.heading}</h2>
                  )}
                  {block.paragraphs?.map((para, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                  {block.bullets && (
                    <ul className="space-y-2 mb-4 mt-2">
                      {block.bullets.map((b, k) => (
                        <li key={k} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* More articles */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <h2 className="heading-section text-foreground mb-8 text-center">Keep reading</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {more.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group bg-card rounded-2xl p-7 border border-border hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
};

export default BlogPost;
