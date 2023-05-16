import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
// import { HomeOld } from "pagesOld/HomeOld/HomeOld";
// import { AboutOld } from "pagesOld/AboutOld/AboutOld";
// import { Mission } from "components/Mission/Mission";
// import { Team } from "components/Team/Team";
// import { Reviews } from "components/Reviews/Reviews";
// import { ProductsOld } from "pagesOld/ProductsOld/ProductsOld";
// import { NotFoundOld } from "pagesOld/NotFoundOld/NotFoundOld";
// import { ProductDetailsOld } from "pagesOld/ProductDetailsOld/ProductDetailsOld";
import { Container } from "./App.styled";

const AboutOld = lazy(() => import("pagesOld/AboutOld/AboutOld"));
const HomeOld = lazy(() => import("pagesOld/HomeOld/HomeOld"));
const ProductDetailsOld = lazy(() => import("pagesOld/ProductDetailsOld/ProductDetailsOld"));
const ProductsOld = lazy(() => import("pagesOld/ProductsOld/ProductsOld"));
const Mission = lazy(() => import("components/Mission/Mission"));
const Team = lazy(() => import("components/Team/Team"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

const AppOld = () => {
  return (
    <Container>      
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<HomeOld />}/>
          <Route path="/about" element={<AboutOld />}>
            <Route path="mission" element={<Mission />}/>
            <Route path="team" element={<Team />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
          <Route path="/products" element={<ProductsOld />}/>
          <Route  path="/products/:id" element={< ProductDetailsOld />} />
          {/* <Route path="*" element={<NotFoundOld />}></Route> */}
        </Route>        
      </Routes>      
    </Container>
  );
};

export default AppOld;
