import { useContext } from "react";
import Banner from "../Banner/Banner";
import { stateContext } from "../../Root/Root";
import State_Card from "../State_Card/State_Card";
const Home = () => {
    const stateInfo = useContext(stateContext);
    console.log(stateInfo);
    return (
        <div>
            <Banner></Banner>
            <div className="mt-4">
                <h1 className="text-3xl font-Merriweather">Latest _Properties</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4" >
                {
                    stateInfo&&
                    stateInfo.map((data)=> <State_Card key={data.id} data={data}></State_Card>)
                }
            </div>
        </div>
    );
};

export default Home;