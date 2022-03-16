import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoList } from "./redux/PhotoAction";
import GalleryImageItem from "./components/GalleryImageItem";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const { photoList, isLoading } = useSelector(
    ({ PhotoReducer }) => PhotoReducer
  );
  useEffect(() => {
    dispatch(getPhotoList()).then((res) => {});
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="overflow-hidden text-gray-700 w-full">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {photoList.map((photo, index) => (
              <GalleryImageItem photo={photo} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
