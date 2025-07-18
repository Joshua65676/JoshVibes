// import React from "react";
import { useNavigate } from "react-router-dom";
import { TbCategoryFilled } from "../../assets/index";

const CategoryButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="rounded-full bg-gray-950 w-12 h-12">
        <button
          type="button"
          onClick={() => navigate("/all-categories")}
          className="group flex flex-col gap-2 items-center absolute left- -ml-7 top-[3.2rem] transform -translate-y-1/2 text-gray-500"
        >
          <TbCategoryFilled className="w-7 h-8 text-gray-600" />
          <span className="text-White opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Category
          </span>
        </button>
      </div>
    </>
  );
};

export default CategoryButton;
