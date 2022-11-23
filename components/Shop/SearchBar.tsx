import { SearchIcon } from "assets/icons";
import { IProduct } from "../../types/Products";

interface SearchBarProps {
  setSearchQuery: (searchQuery: string) => void;
  getSearchedProduct: () => void;
  searchQuery: string;
  searchedData: IProduct[];
}

const SearchBar = ({
  setSearchQuery,
  getSearchedProduct,
  searchQuery,
  searchedData,
}: SearchBarProps) => {
  return (
    <div className="container flex justify-center mx-auto w-full">
      <div className="flex rounded-full relative">
        <input
          type="text"
          className="pl-4 pr-10 py-2 rounded-full w-full text-sm focus:outline-black"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onKeyPress={(e) => {
            e.key === "Enter" && getSearchedProduct();
          }}
        />
        {searchedData?.length >= 1 ? (
          <div
            className="absolute right-3 top-1 text-md cursor-pointer hover:scale-125 transition ease-in-out"
            onClick={() => {
              setSearchQuery("");
            }}
          >
            x
          </div>
        ) : (
          <div
            className="absolute right-2 top-2 cursor-pointer hover:scale-125 transition ease-in-out"
            onClick={getSearchedProduct}
          >
            <SearchIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
