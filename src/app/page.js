const page = async () => {
  const res = await fetch(
    "https://nextjs-orpin-omega-98.vercel.app/api/restaurants"
  );
  const restaurantsData = await res.json();

  const restaurantsCollectionByState = () => {
    const restaurantsCollection = {};

    restaurantsData.forEach((restaurant) => {
      const { state, restaurant_name } = restaurant;

      if (!restaurantsCollection[state]) {
        restaurantsCollection[state] = [];
      }

      restaurantsCollection[state].push(restaurant_name);
    });

    return restaurantsCollection;
  };

  const restaurantsCollection = restaurantsCollectionByState();

  return (
    <section className="container mx-auto px-4 my-12">
      <h2 className="text-3xl md:text-5xl font-bold my-10 text-slate-950 hover:text-slate-900 hover:scale-105 transition-all duration-300">
        Restaurant List
      </h2>
      {Object.keys(restaurantsCollection).map((location, index) => (
        <div key={index}>
          <li className="text-xl md:text-3xl text-black hover:text-slate-900 font-bold my-6 list-disc hover:scale-95 transition-all duration-300 px-4">
            {location}:
          </li>
          <ul>
            {restaurantsCollection[location].map((restaurant, index) => (
              <li className="list-disc ml-16 md:ml-20 my-2 text-sm" key={index}>
                {restaurant}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default page;
