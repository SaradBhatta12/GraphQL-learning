import { gql, useQuery } from "@apollo/client";
const App = () => {
  const { loading, data, error } = useQuery(gql`
    query GetProducts {
      getProducts {
        id
        name
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      {data?.getProducts.map((product: any) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};
export default App;
