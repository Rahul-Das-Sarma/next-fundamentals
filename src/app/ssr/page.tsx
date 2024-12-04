async function getData() {
  const res = await fetch("https://dummyjson.com/users/1");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Server Side data fetching</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
