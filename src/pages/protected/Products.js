import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import Integration from "../../features/integration";

function ProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Products" }));
  }, []);

  return <Integration />;
}

export default ProductsPage;
