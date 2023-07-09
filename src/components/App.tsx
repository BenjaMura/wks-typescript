import { connect } from "react-redux";
import { User, fetchUsers } from "../redux/actions/actions";
import { StoreState } from "../redux/reducers/reducer";

interface AppProps {
  users: User[];
  fetchUsers(): any;
}

function App(props: AppProps) {
  return (
    <div>
      <button onClick={props.fetchUsers}>FETCH USERS!</button>
      {props.users.map((user: User) => {
        return (
          <div key={user.id}>
            {user.id}) {user.name} {user.lastName}
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(App);
