import userInfo from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile user={userInfo} />
      <Statistics data={data} />
      <FriendList friends={friends}/>
    </div>
  );
};
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
