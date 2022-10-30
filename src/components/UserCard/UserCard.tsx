import { IUser } from 'common/types/user.interface';
import { useGetUserQuery } from 'features/user/userApiSlice';
import { selectCurrentUser } from 'features/user/userSlice';
import { useAppSelector } from 'hooks/preTyped';

const UserCard = () => {
  const user: IUser = useAppSelector(selectCurrentUser);
  const { data: userProfile, isLoading } = useGetUserQuery(user.id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="col col-sm-9 col-md-7 col-lg-6 col-xl-5 my-5 text-center ff-lato-4">
      <div className="border rounded">
        <div className="bg-green-5 p-3 rounded-top ">
          <div className="d-inline-block p-3 bg-white rounded-circle">
            <div className="m-0 thumbnail">
              <img className="" src={userProfile.imageUrl} alt="user avatar" />
            </div>
          </div>
        </div>
        <div className="px-3 pb-3 text-truncate">
          <h2 className="py-4 mb-0">{`${userProfile.firstName} ${userProfile.lastName}`}</h2>
          <div className="fs-5">
            <div>{userProfile.email}</div>
            <div className="fw-bold">{userProfile.address}</div>
            <hr />
            <div>Phone number: {userProfile.phoneNumber}</div>
            <div>Age: {userProfile.age}</div>
            <div>Permission level: {userProfile.permissionLevel}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
