import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";
import { Jumbotron } from "../home/migration";

const Blog = (props) => {
  return (
  <Jumbotron id="writings" className="bg-light m-0">
      <h1 className="text-center display-4">Publications & Writing</h1>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            link={value.link}
            index={index}
          />
        );
      })}
  </Jumbotron>
  );
};

const BlogCard = ({ index, title, image, description, link }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {/* <img src={image} className="card-img" alt="..." /> */}
          </div>
          <div className="">
            <div className="">
              <h2 className="">{title}</h2>
              <p className="lead">{description}</p>
              <a
                  href={link.startsWith("http") ? link : `https://${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  );
};

export {Blog, BlogBuilder};
