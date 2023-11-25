const page = async () => {
  const res = await fetch(
    "https://nextjs-orpin-omega-98.vercel.app/api/restaurants"
  );
  const data = await res.json();

  return <div></div>;
};

export default page;
