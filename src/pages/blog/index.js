import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, blogdata } from "../../content_option";

export const Blog = () => {
  return (
    <HelmetProvider>
      <section id="blog" className="blog">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="container">
          <div className="sec_head mb-5">
            <h1 className="fluidz-48 mb-1x">Blog</h1>
            <p className="text-muted">
              I write on LinkedIn — here are my latest posts.
            </p>
          </div>

          <div className="row">
            {blogdata.map((post, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card-link"
                  style={{ "--card-accent": post.color }}
                >
                  <div className="blog-card h-100">
                    {post.image && (
                      <div
                        className="blog-card-image"
                        style={{ backgroundImage: `url(${post.image})` }}
                      ></div>
                    )}
                    <div className="blog-card-body">
                      <span className="blog-date has-first-color">
                        {post.date}
                      </span>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <div className="blog-read-more">
                        Read on LinkedIn
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="ms-2"
                        >
                          <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                          <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};