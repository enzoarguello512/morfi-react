import { IUser } from 'common/types/user.interface';
import { useGetUserQuery } from 'features/user/userApiSlice';
import { selectCurrentUser } from 'features/user/userSlice';
import { useAppSelector } from 'hooks/preTyped';

const UserCard = () => {
  const user: IUser = useAppSelector(selectCurrentUser);
  const { data: userProfile, isLoading } = useGetUserQuery(user.id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="col-6 my-5">
      <div className="border rounded">
        <div className="bg-green-5 p-3 rounded-top text-center ">
          <div className="d-inline-block p-3 bg-white rounded-circle">
            <div className="m-0 thumbnail">
              <img className="" src={userProfile.imageUrl} alt="user avatar" />
            </div>
          </div>
        </div>
        <h2 className="px-3 py-2 text-center ff-lato-4">{`${userProfile.firstName} ${userProfile.lastName}`}</h2>
        <div className="px-3 pb-3 fs-5">
          <div className="text-center">{userProfile.email}</div>
          <div className="text-center fw-bold">{userProfile.address}</div>
          <div>Address: {userProfile.address}</div>
          <div>Phone number: {userProfile.phoneNumber}</div>
          <div>Permission level: {userProfile.permissionLevel}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
