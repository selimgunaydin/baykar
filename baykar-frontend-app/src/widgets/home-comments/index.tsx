import CommentCard from "../../components/comment-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.min.css";
import { Navigation } from "swiper/modules";

const users = [
  {
    id: 0,
    logo: "/zoomer.png",
    logoName: "Zoomer",
    cardText:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    userImg: "/user-thumb.png",
    userName: "Hellen Jummy",
    userTitle: "Team Lead",
  },
  {
    id: 1,
    logo: "/shells.png",
    logoName: "SHELLS",
    cardText:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    userImg: "/user-thumb-2.png",
    userName: "Hellena John",
    userTitle: "Co-founder",
  },
  {
    id: 2,
    logo: "/artvenue.png",
    logoName: "ArtVenue",
    cardText:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    userImg: "/user-thumb-3.png",
    userName: "David Oshodi",
    userTitle: "Manager",
  },
  {
    id: 3,
    logo: "/waves.png",
    logoName: "WAVES",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "/user-thumb.png",
    userName: "Charolette Hanlin",
    userTitle: "CEO",
  },
  {
    id: 4,
    logo: "/waves.png",
    logoName: "WAVES",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "/user-thumb-2.png",
    userName: "Charolette Hanlin",
    userTitle: "CEO",
  },
  {
    id: 5,
    logo: "/waves.png",
    logoName: "WAVES",
    cardText:
      "Magna integer non. Sed diam enim nibh sit. nteger non. Sed diam nteger non. Sed diam Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "/user-thumb.png",
    userName: "Hellen Jummy",
    userTitle: "CEO",
  },
  {
    id: 6,
    logo: "/waves.png",
    logoName: "WAVES",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean.enim nibh sit. Aliquam laoreet aenean.",
    userImg: "/user-thumb-4.png",
    userName: "Hellen Jummy",
    userTitle: "CEO",
  },
  {
    id: 7,
    logo: "/shells.png",
    logoName: "WAVES",
    cardText:
      "Aliquet vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.lectus sed ornare quam nulla",
    userImg: "/user-thumb-2.png",
    userName: "Hellen Jummy",
    userTitle: "CEO",
  },
  {
    id: 8,
    logo: "/shells.png",
    logoName: "WAVES",
    cardText:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    userImg: "/user-thumb-2.png",
    userName: "Hellena John",
    userTitle: "CEO",
  },
];

export default function HomeComments() {
  return (
    <div className="gap-10 pt-20">
      <div className="container mx-auto flex justify-center lg:items-center lg:justify-between">
        <h2 className="text-[32px] font-bold leading-[35.2px] text-blue md:text-[56px] md:font-extrabold  md:leading-6 md:tracking-[0.5px]">
          Because they love us
        </h2>
        <div className="hidden gap-6 lg:flex">
          <button id="swiper-back">
            <img src="/prev-icon.svg"></img>
          </button>
          <button id="swiper-forward">
            <img src="/next-icon.svg" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 mt-4 flex min-h-[277px] w-full justify-center bg-[#FDE68A] md:mt-10 md:min-h-[421px] lg:mx-10 "></div>
        <Swiper
          slidesPerView={5}
          navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
          wrapperClass="flex pb-12 mx-9 lg:mx-12 mt-8 lg:mt-20"
          spaceBetween={24}
          direction="horizontal"
          modules={[Navigation]}
          freeMode={true}
        >
          {users.map((user, index) => (
            <SwiperSlide key={index} className="!w-[384px]">
              <CommentCard key={user.id} userInfo={user} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
