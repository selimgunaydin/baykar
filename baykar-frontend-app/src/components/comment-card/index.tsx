type CommentCardProps = {
  userInfo: {
    logo?: string | undefined;
    logoName?: string | undefined;
    cardText?: string | undefined;
    userImg?: string | undefined;
    userName?: string | undefined;
    userTitle?: string | undefined;
  };
};

export default function CommentCard(props: CommentCardProps) {
  return (
    <div className="max-w-[319px] shrink-0 rounded-[20px] bg-white shadow-xl transition-all hover:scale-105 lg:max-w-[384px] select-none">
      <div className="flex h-[296px] flex-col space-y-4 p-6 md:p-8 lg:h-[430px]">
        <div className="flex items-center space-x-2 py-4">
          <img src={props.userInfo.logo} alt="logo" />
          <h6 className="text-2xl font-bold leading-[26.4px] text-blue-100 md:text-xl ">
            {props.userInfo.logoName}
          </h6>
        </div>
        <div>
          <p className="text-base font-normal leading-[22.4px] text-black md:text-2xl md:leading-[38.4px]">
            {props.userInfo.cardText}
          </p>
        </div>
        <div className="flex items-center space-x-4 md:pt-4">
          <img
            className="h-[64px] w-[64px] rounded-full"
            src={props.userInfo.userImg}
            alt="user-img"
          />
          <div className="flex flex-col">
            <p className="text-lg font-normal leading-[28.8px] text-black">
              {props.userInfo.userName}
            </p>
            <p className="text-base font-normal leading-[22.4px] text-blue-100">
              {props.userInfo.userTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
