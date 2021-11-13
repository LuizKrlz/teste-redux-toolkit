import { FunctionComponent } from "react";
import { useGetAllQuery } from "./features/repositories/repositoryAPI";

const App: FunctionComponent = () => {
  const { data } = useGetAllQuery();

  return (
    <div className="App">
      <h1>Hello</h1>
      <ul>{data && data.map((repo) => <li key={repo.id}>{repo.name}</li>)}</ul>
    </div>
  );
};

export default App;
