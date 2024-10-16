import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAsyncDataBrand} from "./redux/actions/actions";

function App() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(getAsyncDataBrand())
    },[])
    console.log(products    )
  return (
    <div className="App">
        {
            products?(
                products.map((product,index) => (
                    <div key={index}>
                        <span>{product.id}</span>
                        <p>{product.title}</p>
                        <img width='200px' src={product.image} alt=""/>
                    </div>
                )
            )):(
                <span>
                    LOADING
                </span>
            )
        }
    </div>
  );
}

export default App;
