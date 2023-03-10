import { gql, useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { GET_USER } from '../../App';
import './style.css';

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

function Form() {
  const [name, setName] = useState();
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const handleCreateUser = async (event: FormEvent) => {
    event.preventDefault();

    if (!name) return;

    await createUser({
      variables: {
        name,
      },
      refetchQueries: [GET_USER],
    });
  };

  return (
    <form onSubmit={handleCreateUser}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value as any)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
