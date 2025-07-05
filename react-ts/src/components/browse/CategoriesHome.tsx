import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface Category {
  id: number;
  category_name: string;
}

const CategoriesHome: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost/joshvibes/PHP_Backend/get_category.php")
      .then((res) => {
        console.log("Fetched categories:", res.data);
        setCategories(res.data);
      })
      .catch((err) => console.error("Error fetching categories", err));
  }, []);

  return (
    <section className="container max-w-7xl mx-auto w-full p-2">
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-bold text-start">Featured Categories</h1>
        <div className="grid grid-cols-2 gap-4">
          {categories.slice(0, 4).map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {cat.category_name}
            </button>
          ))}
        </div>

        <Link
          to="/all-categories"
          className="text-blue-500 font-semibold block text-end"
        >
          View All →
        </Link>
      </div>
    </section>
  );
};

export default CategoriesHome;
