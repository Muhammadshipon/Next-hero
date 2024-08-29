import Link from "next/link";


const BlogsCard = ({blog}) => {
  const {id,title,description} = blog;
  return (
    <div className="max-w-sm space-y-5 border border-red-300">
      <h3 className="font-bold text-2xl text-center">{title}</h3>
      <p>{description}</p>
      <button className="bg-blue-800 rounded-3xl text-white p-5"><Link href={`/Blogs/${id}`}>View Details</Link></button>
    </div>
  );
};

export default BlogsCard;