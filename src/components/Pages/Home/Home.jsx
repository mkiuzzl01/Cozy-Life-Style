import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Our_Services from "../Our_Services/Our_Services";
import Properties from "../Properties/Properties";
import State_Card from "../State_Card/State_Card";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Home = () => {
  const { isLoading } = useContext(AuthContext);
  const stateInfo = useLoaderData();

  return (
    <div className="my-4">
      <Helmet>
        <title>Cozy-Life-Style | Home </title>
      </Helmet>
      <Banner></Banner>
      <section className="my-20 text-center space-y-4">
        <h1 className="text-3xl font-Merriweather uppercase  font-bold">
          <span className="text-green-400">__</span>Residential
          <span className="text-green-400">__</span>
        </h1>
        <p>
          We are recognized for exceeding client <br /> expectations and
          delivering great results through dedication, ease of process, and
          extraordinary services to our worldwide clients.
        </p>
      </section>
      <section>
        <div className={isLoading ? "visible text-center" : "hidden"}>
          <span className="loading loading-bars loading-lg absolute bg-green-400"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {stateInfo &&
            stateInfo.map((state) => (
              <State_Card key={state.id} state={state}></State_Card>
            ))}
        </div>
      </section>
      <section>
        <div className="my-20">
          <h1 className="text-3xl font-Merriweather uppercase  font-bold">
            <span className="text-green-400">__</span>Our Services
          </h1>
          <p>
            Detailed descriptions of properties allow a good preselection.{" "}
            <br /> Prior to an inspection we can provide additional high
            resolution pictures.
          </p>
        </div>
        <Our_Services></Our_Services>
      </section>
      <section>
        <div className="my-20 lg:text-end">
          <h1 className="text-3xl  font-Merriweather uppercase  font-bold">
            Properties By Area<span className="text-green-400">__</span>
          </h1>
          <p>
            Welcome to our Properties by Area section, <br /> where you can
            explore a diverse range of residential options tailored to your
            space requirements.
          </p>
        </div>
        <Properties></Properties>
      </section>
    </div>
  );
};

export default Home;
