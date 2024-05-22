import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-20 container mx-auto">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className=" h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container pb-14 p-6">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold  ">{title}</h1>
        <p className="sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify ">{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
