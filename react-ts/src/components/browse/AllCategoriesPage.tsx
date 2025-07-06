import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/NavbarListener";

interface Category {
  id: number;
  category_name: string;
}

const AllCategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost/joshvibes/PHP_Backend/get_category.php")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error loading categories", err));
  }, []);

  return (
    <section className="container max-w-7xl mx-auto w-[100rem] p-2">
      <main className="flex flex-col gap-8">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col gap-8 pt-10">
          <h1 className="text-xl font-bold text-start">All Music Categories</h1>
          <div className="grid grid-cols-3 gap-4 h-[40rem]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/category/${cat.id}`)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg"
              >
                <span className="text-[20px] font-bold">
                  {cat.category_name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default AllCategoriesPage;
