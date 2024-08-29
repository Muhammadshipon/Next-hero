import BlogsCard from "@/components/BlogsCard";





export const metadata = {
  title: {
    absolute:'Blogs'
  },
  keywords:["blogs","blogsMama"],
  description: "build up next level website",
};

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


const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
     {
      blogs.map(blog=><BlogsCard key={blog.id} blog={blog}></BlogsCard>)
     }
    </div>
  );
};

export default Blogs;
