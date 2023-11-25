const page = async () => {
  const res = await fetch(
    "https://nextjs-orpin-omega-98.vercel.app/api/restaurants"
  );
  const restaurants = await res.json();

  const groupRestaurantsByState = () => {
    const groupedRestaurants = {};

    restaurants.forEach((restaurant) => {
      const { state, restaurant_name } = restaurant;

      if (!groupedRestaurants[state]) {
        groupedRestaurants[state] = [];
      }

      groupedRestaurants[state].push(restaurant_name);
    });

    return groupedRestaurants;
  };

  const groupedRestaurants = groupRestaurantsByState();
  console.log(groupedRestaurants);

  return (
    <div>
      
    </div>
  );
};

export default page;
