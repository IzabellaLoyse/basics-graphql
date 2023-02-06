import { gql, useQuery } from '@apollo/client';
import './App.css';
import Form from './components/Form/Form';

type User = {
  id: string;
  name: string;
};

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER);

  return (
    <div className="App">
      <h1>GraphQl + React</h1>

      {loading && <p>Carregando...</p>}
      <div>
        <Form />
      </div>

      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
