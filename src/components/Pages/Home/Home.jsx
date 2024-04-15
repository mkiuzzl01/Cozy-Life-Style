import Banner from "../Banner/Banner";
import State_Card from "../State_Card/State_Card";
import { useLoaderData } from "react-router-dom";
const Home = () => {
    const stateInfo = useLoaderData();
    return (
        <div className="my-4">
            <Banner></Banner>
            <div className="mt-4">
                <h1 className="text-4xl font-Merriweather text-center font-bold">__Residential__</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4" >
                {
                    stateInfo&&
                    stateInfo.map((state)=> <State_Card key={state.id} state={state}></State_Card>)
                }
            </div>
        </div>
    );
};

export default Home;