const blogs = [
  {
      "id": 1,
      "title": "The Future of AI",
      "description": "Exploring the advancements and ethical considerations of artificial intelligence in modern society."
  },
  {
      "id": 2,
      "title": "A Beginner's Guide to Meditation",
      "description": "Learn the basics of meditation, its benefits, and how to start a daily practice."
  },
  {
      "id": 3,
      "title": "Traveling on a Budget",
      "description": "Tips and tricks for exploring the world without breaking the bank, including affordable destinations and budgeting strategies."
  },
  {
      "id": 4,
      "title": "Healthy Eating Habits",
      "description": "Discover how to maintain a balanced diet, make healthier food choices, and sustain long-term nutritional well-being."
  },
  {
      "id": 5,
      "title": "Mastering the Art of Photography",
      "description": "A comprehensive guide to improving your photography skills, from composition and lighting to post-processing techniques."
  }
]

const page = ({params}) => {
  console.log(params.id);
  const details=blogs.find(blog=>blog.id==params.id);
  console.log(details)
  return (
    <div className="max-w-sm space-y-5 border border-red-300 h-screen">
    <h3 className="font-bold text-2xl text-center text-black">{details.title}</h3>
    <p>{details.description}</p>
    {/* <button className="bg-blue-800 rounded-3xl text-white p-5"><Link href={`/Blogs/${id}`}>View Details</Link></button> */}
  </div>
  );
};

export default page;