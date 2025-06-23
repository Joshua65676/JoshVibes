// AllCategoriesPage.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Category {
  id: number;
  category_name: string;
}

const AllCategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost/joshvibes/PHP_Backend/get_category.php")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error loading categories", err));
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">All Music Categories</h1>
      <div className="grid grid-cols-2 gap-4">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => navigate(`/category/${cat.id}`)}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            {cat.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllCategoriesPage;