import { useCatalogContext } from "context/catalogContext";

const Filter = () => {
  const { selectOptions, setSelectedOption } = useCatalogContext();
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  sm:w-2/6 lg:w-1/6  mr-3 rounded-lg block w-2/4 p-4  "
      id="shopfilters"
      onChange={(e) => {
        setSelectedOption(e.target.value);
      }}
    >
      {selectOptions.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
