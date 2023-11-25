const page = async () => {
  const res = await fetch(
    "https://nextjs-orpin-omega-98.vercel.app/api/restaurants"
  );
  const restaurants = await res.json();

  return <div>Hello</div>;
};

export default page;
