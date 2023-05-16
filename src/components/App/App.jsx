import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Dogs from "pages/Dogs";
import DogDetails from "pages/DogDetails";
import { Layout } from "components/Layout/Layout";
import Gallery from "components/Gallery/Gallery";

const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="dogs" element={<Dogs />}/>
                    <Route path="dogs/:dogId" element={<DogDetails />}>
                        <Route path="subbreeds" element={<div>Subbreeds</div>}/>
                        <Route path="gallery" element={<Gallery />}/>
                    </Route>
                </Route>                
            </Routes>
        </div>
    );
}

export default App;