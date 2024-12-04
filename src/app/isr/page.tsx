async function getData() {
  const res = await fetch("https://dummyjson.com/users/1", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Incremental Static Regeneration</h1>
      <div>{JSON.stringify(data)}</div>{" "}
    </div>
  );
}
