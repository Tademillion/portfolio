import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for creating maintainable and scalable React applications, including state management, code splitting, and performance optimization.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Performance", "Best Practices"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Mastering TypeScript for Enterprise Applications",
      excerpt:
        "A comprehensive guide to using TypeScript in large-scale applications, covering advanced types, decorators, and integration with popular frameworks.",
      date: "March 10, 2024",
      readTime: "12 min read",
      tags: ["TypeScript", "Enterprise", "Development"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "The Future of Web Development: What's Next?",
      excerpt:
        "Exploring upcoming trends in web development, from WebAssembly to Edge Computing, and how they'll shape the future of the industry.",
      date: "March 5, 2024",
      readTime: "10 min read",
      tags: ["Web Development", "Future Tech", "Trends"],
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div id="blog" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-tertiary rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {article.title}
                  </h3>
                  <p className="text-textSecondary mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-textSecondary mb-4">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/80 transition-colors duration-300"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
