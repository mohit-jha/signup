import React from "react";
import { Slider } from "infinite-react-carousel";
function CardBottom() {
  const settings = {
    slidesToShow: 2,
    // arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    style: {
      margin: "0 20px",
    },
  };

  const card_data = [
    {
      body: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
      title: "Jack F",
      desc: "Ex Blackrock PM",
    },
    {
      body: "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
      title: "Yash P",
      desc: "Research, 3poch Crypto Hedge Fund",
    },
    {
      body: "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
      title: "Shiv S",
      desc: "Co-Founder Magik Labs",
    },
  ];

  return (
    <Slider {...settings} className="cards" >
      {card_data.map((item) => {
        return (
          <div className="card_b">
            <div className="card_top">
              <p>{item.title}</p>
              <span>{item.desc}</span>
            </div>
            <div className="body">{item.body}</div>
          </div>
        );
      })}
    </Slider>
  );
}
export default CardBottom;
