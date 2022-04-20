
const SearchBar = ({ search,handleSubmit,handleFormChange }) => {
  

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          onChange={handleFormChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
export default SearchBar;

// import { useDispatch } from "react-redux";
// import searchSlice from "../../redux/slices/searchSlice";
// import { useState } from "react";

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");

//   const handleFormChange = (e) => {
//     setSearch(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(searchSlice.actions.setSearch(search));
//   };
//   return (
//     <>
//       <h1>Search</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="search"
//           placeholder="Search"
//           value={search}
//           onChange={handleFormChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </>

//   );
// }
// export default SearchBar;