import React from "react";
import Slider from "infinite-react-carousel";

function CardTop() {
  const settings = {
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    style: {
      margin: "0 20px",
    },
  };
  return (
    <Slider {...settings} className="top_cards" dots>
      <div className="card-container">
        <div className="card_t">
          <div className="tc_head">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z"
                fill="#165DFF"
                fill-opacity="0.1"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Save</span>
          </div>
          <div className="tc_body">
            We’ll be sending notifications to you here
          </div>
          <div className="tc_foot">
            <div className="rec_box"></div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card_t">
          <div className="tc_head">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0996 25.9004V11.9004"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.7002 25.9V3.5"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.2998 25.9V17.5"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.400391"
                  width="14"
                  height="14"
                  rx="4.2"
                  fill="#0071E3"
                />
                <path
                  d="M6.66451 10.3277C6.9696 10.3277 7.20025 10.2106 7.35646 9.97627L10.7356 4.8837C10.7918 4.80071 10.8333 4.71895 10.8601 4.6384C10.887 4.55542 10.9004 4.47609 10.9004 4.40043C10.9004 4.19053 10.8272 4.01724 10.6807 3.88056C10.5367 3.74144 10.3585 3.67188 10.1462 3.67188C9.99976 3.67188 9.87529 3.70116 9.77278 3.75974C9.67271 3.81588 9.57752 3.91351 9.48721 4.05263L6.64987 8.50817L5.22937 6.80577C5.0756 6.62759 4.88278 6.53851 4.65091 6.53851C4.43369 6.53851 4.2543 6.60807 4.11273 6.74719C3.97117 6.88631 3.90039 7.06082 3.90039 7.27072C3.90039 7.36591 3.91503 7.45622 3.94432 7.54165C3.97605 7.62463 4.03341 7.71128 4.11639 7.80158L6.00185 10.0239C6.17515 10.2264 6.39603 10.3277 6.66451 10.3277Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="tc_body">
            Notify me when any wallets move more than{" "}
          </div>
          <div className="tc_foot">
            <div className="rec_btn">
              <span>$1,000.00</span>
              <svg
                width="6"
                height="4"
                viewBox="0 0 6 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.799654 0.599527L3.17719 2.97704C3.24553 3.04538 3.35633 3.04538 3.42467 2.97704L5.80215 0.599527C5.9124 0.489277 5.83435 0.300781 5.67839 0.300781H0.923399C0.767489 0.300781 0.689411 0.489284 0.799654 0.599527Z"
                  fill="#96979A"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card_t">
          <div className="tc_head">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4001 25.6663C20.8434 25.6663 26.0667 20.443 26.0667 13.9997C26.0667 7.55635 20.8434 2.33301 14.4001 2.33301C7.95674 2.33301 2.7334 7.55635 2.7334 13.9997C2.7334 20.443 7.95674 25.6663 14.4001 25.6663Z"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.4004 7V14L19.0671 16.3333"
                stroke="black"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.400391"
                  width="14"
                  height="14"
                  rx="4.2"
                  fill="#0071E3"
                />
                <path
                  d="M6.66451 10.3277C6.9696 10.3277 7.20025 10.2106 7.35646 9.97627L10.7356 4.8837C10.7918 4.80071 10.8333 4.71895 10.8601 4.6384C10.887 4.55542 10.9004 4.47609 10.9004 4.40043C10.9004 4.19053 10.8272 4.01724 10.6807 3.88056C10.5367 3.74144 10.3585 3.67188 10.1462 3.67188C9.99976 3.67188 9.87529 3.70116 9.77278 3.75974C9.67271 3.81588 9.57752 3.91351 9.48721 4.05263L6.64987 8.50817L5.22937 6.80577C5.0756 6.62759 4.88278 6.53851 4.65091 6.53851C4.43369 6.53851 4.2543 6.60807 4.11273 6.74719C3.97117 6.88631 3.90039 7.06082 3.90039 7.27072C3.90039 7.36591 3.91503 7.45622 3.94432 7.54165C3.97605 7.62463 4.03341 7.71128 4.11639 7.80158L6.00185 10.0239C6.17515 10.2264 6.39603 10.3277 6.66451 10.3277Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="tc_body">Notify me when any wallet dormant for </div>
          <div className="tc_foot">
            <div className="rec_btn">
              <span>> 30 days</span>
              <svg
                width="6"
                height="4"
                viewBox="0 0 6 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.799654 0.599527L3.17719 2.97704C3.24553 3.04538 3.35633 3.04538 3.42467 2.97704L5.80215 0.599527C5.9124 0.489277 5.83435 0.300781 5.67839 0.300781H0.923399C0.767489 0.300781 0.689411 0.489284 0.799654 0.599527Z"
                  fill="#96979A"
                />
              </svg>
            </div>
            <p>becomes active</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default CardTop;
