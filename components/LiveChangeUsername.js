import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useMoralis } from "react-moralis";

function LiveChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const AjaxData = {
    title: `Enter your new Username (current: ${user.getUsername()})`,
    input: "text",
    inputValue: "developwithankit",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
  };

  async function setUserName() {
    const { value: username } = await Swal.fire({
      title: "Change Username",
      text: `Enter your new Username (current: ${user.getUsername()})`,
      input: "text",
      inputPlaceholder: "New Username",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Change",
      showLoaderOnConfirm: true,
      showCancelButton: true,
    });

    if (username) {
      // Swal.fire(username);
      if (!username) return;

      setUserData({ username });
    }
  }

  return (
    <div className="relative top-[-20px] left-full pl-3 cursor-pointer hover:opacity-25 h-5 w-5">
      {/* <div className="flex w-full text-center items-center justify-center cursor-pointer"> */}
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="h-5 w-5"
      >
        <svg
          className="flex mx-auto fill-white shadow"
          layout="fill"
          objectFit="cover"
          viewBox="0 0 489.7 487.511"
        >
          <g id="edit-svgrepo-com" transform="translate(0 -1.094)">
            <g id="Group_7" data-name="Group 7">
              <path
                id="Path_12"
                data-name="Path 12"
                d="M461.9,145.9l11.5-11.3,2.9-2.8,1.4-1.4c.6-.6,1.6-1.6,2.4-2.5a39.881,39.881,0,0,0,8-14.1,35.346,35.346,0,0,0,1.5-9.1l.1-3.8a7.534,7.534,0,0,0-.6-2.9c-1.1-2.4-2.6-5.9-4.4-9.3a37.845,37.845,0,0,0-5.6-8.4,6.4,6.4,0,0,0-1.5-1.4,3.445,3.445,0,0,0-1.1-.5,2.7,2.7,0,0,0-1.8.1c-1,.6-1.7,1.6-1.8,4.1a161.84,161.84,0,0,0-1.1,18.1v2.1a22.337,22.337,0,0,1-4.3,8.4c-2,2.4-4.5,4-7.1,5.8q-7.8,5.4-15.6,11.4c-10.5,7.9-21.1,16.3-31.7,25.2-21.3,17.7-42.8,37.2-63.8,57.4q-38.55,36.9-77,73.7l-38.9,37.2-9.6,9.3-2.2,2.1a1.007,1.007,0,0,1-.3.1l-.6.1-25.4,4.9c-17.5,3.5-34.9,6.9-52.4,10.4l-8.4,1.7c3.4-16.5,6.9-33.1,10.3-49.6l5.2-26.3,1.3-6.6.6-3.3.1-.4V264c.1-.4-.1.5-.1.3s.2-.8.1-.4c-.2.6-.1.3-.1.4-.1,0,.2-.5.2-.6h0l.3-.3,1.2-1.2,2.3-2.4c12.7-12.3,25.5-24.5,38.2-36.8,40.1-39.1,80.2-78.4,119.7-118.1q29.55-29.85,58.7-60l7.3-7.6c1.2-1.3,1.9-2,2.3-2.4h.3a66.907,66.907,0,0,1,8.4,1.1,13.065,13.065,0,0,1,2.7.7h.1c-.2-.1.4.2-.3-.1h.1l.2.1.6.2,1.2.5,2.4,1c3,1.3,5.1,2.2,7.9,3.6a102.749,102.749,0,0,1,15.1,9.4c21.6,15.9,33.9,37.8,41.7,32.1,3.3-2.6,4.3-9.9,1.1-20.4-3.2-10.4-10.9-24.2-24.9-36.1a126.791,126.791,0,0,0-20.1-14c-1.8-1-3.8-2-5.6-3-2-1.1-3.4-1.6-5.2-2.5l-1.2-.6-1-.5-.9-.4c-1.2-.5-2.4-.9-3.6-1.3A67.514,67.514,0,0,0,394.3,3c-2.1-.4-4.2-.8-6.1-1.1l-2.8-.4-1.6-.2a24.519,24.519,0,0,0-2.7-.2A30.411,30.411,0,0,0,370,2.9a30.755,30.755,0,0,0-8.8,5,23.144,23.144,0,0,0-1.9,1.6l-1.4,1.3-2,1.9-4,3.8-8,7.6c-21.2,20.3-42.3,40.9-63,61.7-33.3,33.6-66.2,67.3-99.1,101.3L132.6,238l-3.2,3.3a36.836,36.836,0,0,0-4.6,6,33.554,33.554,0,0,0-3.1,6.9,58.1,58.1,0,0,0-1.3,5.7L117,277.3,110.1,312c-2.8,10.2-5.7,20.4-8.5,30.7l-2.1,7.7-1,3.9-.5,1.9a34.633,34.633,0,0,0-.7,4.1,25.9,25.9,0,0,0,6,19.2,24.68,24.68,0,0,0,8.9,6.5,27.816,27.816,0,0,0,10.1,2.2c1,0,2,0,3-.1l1.6-.2.5-.1,1.4-.2,1-.2,3.9-.7,7.9-1.3,15.7-2.7,31.5-5.7,31.5-6,7.9-1.5a40.249,40.249,0,0,0,14.5-6.1c1.1-.8,2.2-1.6,3.1-2.4l1.6-1.4.9-.9,2.9-2.8,5.7-5.6c15.2-15.1,30.5-30.1,45.7-45.2q45.45-45.6,90.9-91.3L439,168.3Zm-81.3-111.1h0c-.3,0-.6,0-.7-.1ZM121,353.3c-.5.1.1,0,.4-.1h.2Z"
              />
              <path
                id="Path_13"
                data-name="Path 13"
                d="M400.9,282.4c-4.9-7.7-9,2.3-12.1,17.3-5.2,24.7-8.9,52-11.4,80.8-1.3,14.4-2.3,29.2-3,44.1-.2,3.7-.3,7.5-.5,11.3l-.2,5.7v.5h0v.3l-.1,1.4c-.1,1.3-.2,1-.3,1.3a13.116,13.116,0,0,1-6.5,8.1,12.077,12.077,0,0,1-6.4,1.3l-13.8-.3-27.5-.6L264,452.4c-36.7-.7-73.5-1.3-110.2-2-36.8-.5-73.6-.9-110.4-.9h-.8l-1.7-.1c-.1-.2.5,0,0-.1a11.5,11.5,0,0,1-1.7-.6,8.09,8.09,0,0,1-2.7-2.5,6.9,6.9,0,0,1-1.1-3.5l-.2-13.8c-.2-18.4-.5-36.9-.9-55.4.4-18.3.7-36.5,1.1-54.8.8-58,1.4-115.9,1.2-173.8l-.1-20.7a5.974,5.974,0,0,1,2-4.6,6.113,6.113,0,0,1,2.2-1.3c.4-.1.8-.2,1.3-.3h4.1l21.7-.3c28.9-.5,57.8-1.2,86.6-2.3,32.8-1.2,60-5.8,57.6-14.8-2.2-8.3-25.5-14.4-59.1-15.3-30.2-.8-60.6-1.6-91-2.4l-11.4-.2-5.7-.1c-1.1,0-1.7-.1-3.1,0-1.5.1-3.1.1-4.6.3a42.474,42.474,0,0,0-30.5,18.9,37.707,37.707,0,0,0-4.1,8.3,40.663,40.663,0,0,0-2.3,9.7l-.1,1.3v.7l-.1,1.4v32.1c.2,48.8.8,97.6,1.5,146.4l1.1,73.2.6,36.6.3,18.3.1,9.1v2.3c0,.8,0,1.3.1,2.6a52.5,52.5,0,0,0,.8,6.8,39.6,39.6,0,0,0,21.6,29,41.525,41.525,0,0,0,13,3.8l2,.2.5.1h1.3l1,.1,4.1.2,8.2.4,16.5.7q33,1.35,66,2.1,66.15,1.5,132.7,1.4c22.2,0,44.4-.1,66.5-.1l16.6-.1H361l3.6-.2a49.424,49.424,0,0,0,14.2-3.6,46.131,46.131,0,0,0,21.4-19.3,47.107,47.107,0,0,0,5.1-13.7,33.21,33.21,0,0,0,.6-4.4,10.618,10.618,0,0,0,.1-1.5v-1l.1-2v-3.1c-.1-44.4-.1-88.7.5-132.9C406.9,298.7,403.4,286.3,400.9,282.4Z"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default LiveChangeUsername;
