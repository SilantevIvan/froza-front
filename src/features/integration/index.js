import { useState } from "react";
import { useDispatch } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { showNotification } from "../common/headerSlice";

const INITIAL_INTEGRATION_LIST = [
  {
    name: "Froza 1",
    icon: "https://www.allrecipes.com/thmb/p6ePT5lcYr5xK5WLZ3ea33Qrt_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg",
    isActive: true,
    description:
      "Nam at rhoncus quam. Mauris vel elementum eros. Nulla rutrum mauris in commodo tempus. Etiam lacinia id diam eu blandit. Aliquam erat volutpat.",
  },
  {
    name: "Froza 2",
    icon: "https://www.allrecipes.com/thmb/p6ePT5lcYr5xK5WLZ3ea33Qrt_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg",
    isActive: false,
    description:
      "Nam at rhoncus quam. Mauris vel elementum eros. Nulla rutrum mauris in commodo tempus. Etiam lacinia id diam eu blandit. Aliquam erat volutpat.",
  },
  {
    name: "Froza 3",
    icon: "https://www.allrecipes.com/thmb/p6ePT5lcYr5xK5WLZ3ea33Qrt_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg",
    isActive: true,
    description:
      "Nam at rhoncus quam. Mauris vel elementum eros. Nulla rutrum mauris in commodo tempus. Etiam lacinia id diam eu blandit. Aliquam erat volutpat.",
  },
  {
    name: "Froza 4",
    icon: "https://www.allrecipes.com/thmb/p6ePT5lcYr5xK5WLZ3ea33Qrt_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg",
    isActive: false,
    description:
      "Nam at rhoncus quam. Mauris vel elementum eros. Nulla rutrum mauris in commodo tempus. Etiam lacinia id diam eu blandit. Aliquam erat volutpat.",
  },
  {
    name: "Froza 5",
    icon: "https://www.allrecipes.com/thmb/p6ePT5lcYr5xK5WLZ3ea33Qrt_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg",
    isActive: false,
    description:
      "Nam at rhoncus quam. Mauris vel elementum eros. Nulla rutrum mauris in commodo tempus. Etiam lacinia id diam eu blandit. Aliquam erat volutpat.",
  },
  {
    name: "Froza 6",
    icon: "https://www.allrecipes.com/thmb/p6ePT5lcYr5xK5WLZ3ea33Qrt_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg",
    isActive: false,
    description:
      "Nam at rhoncus quam. Mauris vel elementum eros. Nulla rutrum mauris in commodo tempus. Etiam lacinia id diam eu blandit. Aliquam erat volutpat.",
  },
  {
    name: "Froza 7",
    icon: "https://www.allrecipes.com/thmb/p6ePT5lcYr5xK5WLZ3ea33Qrt_M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13313-best-cream-of-broccoli-soup-AllrecipesMagazine-4x3-495e6329745545a28c2a9b4e6ee3fab6.jpg",
    isActive: false,
    description:
      "Nam at rhoncus quam. Mauris vel elementum eros. Nulla rutrum mauris in commodo tempus. Etiam lacinia id diam eu blandit. Aliquam erat volutpat.",
  },
];

function Integration() {
  const dispatch = useDispatch();

  const [integrationList, setIntegrationList] = useState(
    INITIAL_INTEGRATION_LIST
  );

  const updateIntegrationStatus = (index) => {
    let integration = integrationList[index];
    setIntegrationList(
      integrationList.map((i, k) => {
        if (k === index) return { ...i, isActive: !i.isActive };
        return i;
      })
    );
    dispatch(
      showNotification({
        message: `${integration.name} ${
          integration.isActive ? "disabled" : "enabled"
        }`,
        status: 1,
      })
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrationList.map((i, k) => {
          return (
            <TitleCard key={k} title={i.name} topMargin={"mt-2"}>
              <figure>
                <img src={i.icon} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Broccoli</h2>
                <p>
                  Nam at rhoncus quam. Mauris vel elementum eros. Nulla rutrum
                  mauris in commodo tempus. Etiam lacinia id diam eu blandit.
                  Aliquam erat volutpat.
                </p>
                <div className="card-actions justify-start">
                  <button className="px-3 py-1 rounded-md hover:bg-opacity-50 hover:animate-pulse hover:bg-gray-900 hover:text-white w-28 h-12 bg-opacity transition-colors duration-300 delay-100 ease-in-out hover:-translate-y-0.4 hover:scale-120">
                    Buy Now
                  </button>
                </div>
              </div>
            </TitleCard>

            // <TitleCard key={k} title={i.name} topMargin={"mt-2"}>

            //   <p className="flex flex-col gap-4">
            //     <img
            //       alt="icon"
            //       src={i.icon}
            //       className="mx-auto w-auto h-42 pb-3"
            //     />

            //     <div>{i.description}</div>
            //   </p>
            // </TitleCard>
          );
        })}
      </div>
    </>
  );
}

export default Integration;
