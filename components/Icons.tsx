export const TwitterIcon = ({ className, ...rest }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.23em"
    height="1em"
    viewBox="0 0 256 209"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const GithubIcon = ({ className, ...rest }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

// #0A66C2
export const LinkedInIcon = ({
  className,
  ...rest
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const PinterestIcon = ({
  className,
  ...rest
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({
  className,
  ...rest
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({
  className,
  ...rest
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1024 1024"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M388.145 748.05c-3.713 8.054-7.397 15.71-10.805 23.486-3.607 8.231-2.083 13.59 4.503 17.078 7.465 3.954 14.62 2.384 18.824-5.2 4.752-8.573 8.816-17.555 12.733-26.554 1.877-4.312 3.957-4.95 7.971-2.835 8.375 4.41 16.849 8.674 26.663 8.915 2.644.065 3.998 2.026 5.22 4.128a5046.399 5046.399 0 0 0 15.925 27.153c.827 1.402 1.344 3.08 2.999 3.813 8.65-3.573 13.133-9.674 13.656-19.301.506-9.315 1.094-9.58 10.357-7.969 11.43 1.99 11.121-.874 9.12 11.835-3.414 21.677-6.745 43.366-10.135 65.046-1.018 6.509-1.075 6.627-7.495 5.62-16.576-2.598-13.138-.395-11.17-14.673 1.054-7.65 2.28-15.275 3.654-24.4-8.461 6.493-15.685 12.024-22.894 17.573-3.431 2.64-7.258 4.923-10.172 8.05-8.795 9.437-18.335 3.248-27.78 2.639.256-2.976 2.158-3.705 3.53-4.794a6574 6574 0 0 1 30.601-24.136c1.764-1.384 3.492-2.504 1.917-5.249-7.623-13.29-15.134-26.644-22.708-39.963-.312-.547-.862-.958-1.322-1.455-2.137.823-2.339 2.854-3.072 4.416-9.901 21.106-19.8 42.212-29.548 63.389-1.563 3.395-3.054 4.41-6.81 2.754-13.111-5.779-13.164-5.63-7.091-18.69 2.013-4.328 3.955-8.69 6.257-13.757-6.437.58-11.956.328-17.372-1.638-15.576-5.653-22.355-19.339-16.198-34.662 4.464-11.11 9.989-21.79 14.895-32.728 1.377-3.071 3.159-3.403 5.882-1.928 1.9 1.029 3.912 1.856 5.893 2.729 7.707 3.396 7.71 3.389 3.972 11.308zM538.348 213.798c1.355 4.111 2.607 7.84 4.295 12.869 3.945-11.641 7.481-22 10.965-32.378 2.172-6.47 4.352-12.94 6.355-19.465.914-2.976 2.482-4.47 5.738-4.205 4.59.373 9.266-.54 13.93.646.333 4.053-1.517 7.348-2.63 10.75-7.195 21.984-14.614 43.895-21.761 65.895-1.27 3.907-3.075 5.556-7.4 5.532-15.448-.087-15.487.088-20.256-14.532-3.614-11.08-7.109-22.2-10.674-33.295-.545-1.697-1.182-3.363-2.279-6.461-3.779 11.216-7.09 21.08-10.427 30.935-2.134 6.306-4.401 12.569-6.418 18.911-.939 2.953-2.479 4.431-5.735 4.275-4.322-.207-8.66-.132-12.99-.075-2.477.032-4.019-.86-4.822-3.352-8.27-25.665-16.607-51.309-24.909-76.964-.146-.454-.082-.975-.158-2.06 6.167-1.413 12.396-1.296 18.536-.185 2.628.476 2.625 3.615 3.317 5.755 4.818 14.877 9.552 29.782 14.333 44.671.3.933.777 1.808 1.2 2.775 1.926-.618 1.957-2.304 2.404-3.604 5.095-14.793 10.264-29.563 15.108-44.438 1.283-3.937 3.229-5.425 7.399-5.599 12.647-.526 12.604-.699 16.467 11.404 3.389 10.62 6.869 21.21 10.412 32.195zM251.672 328.077c.714-9.6 4.914-17.039 11.838-22.766 8.513-7.041 17.94-6.687 27.079-1.493 8.242 4.685 16.068 10.102 24.068 15.21 2.388 1.525 4.663 3.245 7.135 4.612 3.146 1.74 3.284 3.687 1.204 6.417-1.71 2.245-3.302 4.636-4.567 7.153-2.125 4.227-4.451 4.918-8.499 1.995-6.34-4.578-13.069-8.62-19.655-12.856-1.96-1.26-3.93-2.533-6.007-3.58-6.3-3.175-11.935-2.271-15.287 2.325-4.053 5.557-3.577 12.386 1.481 17.239 2.024 1.94 4.447 3.499 6.807 5.05 6.823 4.482 13.66 8.948 20.59 13.265 2.907 1.812 3.19 3.501 1.327 6.452-7.813 12.367-7.718 12.414-20.19 4.45-6.037-3.856-11.97-7.9-18.188-11.44-6.935-3.949-12.27-2.989-15.903 2.237-4.135 5.947-3.535 12.492 2.26 17.429 7.628 6.5 16.572 11.147 24.882 16.692 5.582 3.726 5.641 3.636 2.144 9.016-7.168 11.026-7.128 10.965-18.02 3.818-12.676-8.317-25.359-16.627-38.195-24.69-3.692-2.32-4.522-4.356-1.58-7.803 1.609-1.883 2.765-4.155 4.095-6.271 1.715-2.73 3.41-5.448 7.368-1.737.298-8.043 1.765-14.855 6.206-20.866 4.49-6.079 10.508-9.525 17.602-10.923 0-3.202 0-5.846.005-8.935zM811.786 364.397c-3.075 17.703-13.833 28.341-29.9 33.388-14.948 4.695-28.343.529-39.492-10.31-9.455-9.19-14.74-21.304-21.805-32.167-.726-1.116-1.32-2.316-2.01-3.455-5.125-8.452-5.116-8.43 3.578-13.723 19.064-11.603 38.197-23.098 57.106-34.949 4.094-2.566 5.896-1.75 8.102 2.075 5.407 9.376 11.233 18.508 16.746 27.823 5.624 9.505 9.071 19.614 7.675 31.318m-34.604-36.294-39.124 23.915c4.626 6.95 7.66 14.246 12.98 20.043 8.3 9.043 20.245 10.33 30.83 3.6 11.026-7.012 14.69-17.545 10.202-29.238-2.472-6.44-6.67-11.884-10.15-17.743-1.057-1.78-2.459-2.1-4.738-.577zM658.171 296.679c-1.806-2.67-2.858-5.287-3.9-8.613-2.784 4.873-5.558 3.167-8.846.79-9.684-7.003-9.822-6.938-3.037-16.626 13.663-19.513 27.446-38.942 41.053-58.493 1.987-2.856 3.672-3.391 6.412-1.151 2.315 1.893 4.761 3.697 7.369 5.143 4.406 2.443 4.059 5.023 1.271 8.655-4.442 5.788-8.461 11.9-13.037 18.412 11.837.283 20.617 5.317 26.81 14.558 9.543 14.244 5.462 33.713-9.18 44.807-13.08 9.909-31.645 7.817-42.836-4.836-.661-.748-1.25-1.56-2.079-2.646m9.438-26.348c-3.39 9.988-.127 17.816 8.816 21.146 8.386 3.124 17.358-2.01 21.263-12.17 2.912-7.571-.873-15.72-8.868-19.091-7.854-3.312-15.575.176-21.211 10.115zM676.58 755.388c-13.74-17.216-11.77-35.827 4.748-48.267 4.09-3.08 8.966-4.145 14.607-5.932-4.899-5.698-9.206-11.116-13.969-16.1-3.018-3.157-2.914-5.14.36-8.072 10.113-9.058 10.109-9.27 18.876.675 14.869 16.867 29.6 33.853 44.36 50.815 1.287 1.478 2.862 2.816 3.341 4.981-2.908 4.194-7.33 6.751-10.898 10.204-2.589 2.505-4.014-.706-6.07-1.77-3.331 13.353-11.79 21.328-24.624 24.36-12.235 2.891-22.167-1.8-30.732-10.894m10.788-30.318c-2.71 7.361-.126 13.382 5.06 18.479 4.24 4.165 9.32 6.354 15.399 4.447 6.82-2.14 11.273-8.088 11.191-14.79-.092-7.571-6.336-15.32-14.048-17.43-6.498-1.78-12.956 1.417-17.602 9.294zM241.095 558.999c1.086-7.708 1.641-15.007-.877-22.116-1.27-3.584-3.177-6.782-7.631-6.785-4.814-.003-6.056 3.782-6.75 7.37-1.45 7.494-2.261 15.111-3.683 22.611-3.359 17.717-16.87 25.886-31.962 19.444-6.651-2.84-10.988-8.082-13.682-14.559-5.51-13.244-5.893-26.794-1.892-40.558 1.06-3.645 2.824-5.001 6.51-3.528 3.232 1.291 7.568.84 9.736 3.396 2.53 2.981-.917 6.445-1.515 9.726-1.213 6.666-1.457 13.2.601 19.715 1.333 4.219 3.46 7.972 8.46 7.79 5.011-.182 6.366-4.402 7.065-8.408 1.284-7.36 2.038-14.812 3.298-22.177 2.145-12.531 7.816-18.627 18.608-20.43 10.086-1.685 19.725 3.093 24.932 13.496 8.03 16.044 7.999 32.64 1.765 49.326-1.017 2.722-2.612 4.077-5.724 2.83-3.384-1.357-7.856-1.53-10.07-3.89-2.792-2.98 1.92-6.386 2.023-9.93.028-.976.433-1.941.788-3.323zM643.852 739.142c20.246 2.746 31.783 15.498 31.489 34.355-.237 15.142-12.668 28.801-28.914 31.771-15.086 2.758-28.651-4.446-35.133-18.39-1.67-3.596-1.316-5.511 2.558-7.31 11.016-5.115 21.845-10.634 32.72-16.049 1.44-.718 3.165-1.08 4.3-2.91-3.98-4.976-9.435-5.116-14.831-3.909-6 1.342-11.292 4.462-14.235 10.105-1.89 3.626-4.064 3.86-7.186 2.133-.29-.16-.604-.28-.912-.407-8.955-3.654-9.553-5.34-3.297-13.159 8.397-10.495 19.774-15.372 33.441-16.23m-3.698 51.274c11.541.58 20.124-8.663 16.186-18.48l-25.025 12.427c2.08 3.95 5.14 4.81 8.84 6.053zM829.737 573.174c-.176 7-1.5 13.282-4.726 19.107-7.109 12.84-20.953 18.896-35.226 15.655-4.482-1.018-5.984-2.801-4.773-7.58 2.983-11.764 5.434-23.662 8.116-35.502.293-1.293.754-2.559-.068-4.172-3.193-.857-5.733.69-7.85 2.824-6.47 6.522-8.189 14.462-5.41 22.997 1.242 3.814.637 5.545-2.765 7.477-9.303 5.284-10.88 4.721-13.396-5.821-4.914-20.593 8.222-42.993 27.31-46.574 18.993-3.562 36.637 9.827 38.471 29.188.063.663.184 1.32.317 2.4m-15.907-2.319c-1.383-3.885-3.61-6.902-8.234-8.13-2.077 9.398-4.69 18.344-5.78 27.676 9.93.619 16.328-8.232 14.014-19.546zM613.951 206.585c24.98.637 40.488 22.531 32.113 44.444-1.61 4.214-3.56 5.095-7.82 3.404-11.291-4.48-22.757-8.521-34.171-12.685-1.34-.488-2.694-1.398-4.512-.55-1.043 4.109.757 7.49 3.576 10.154 5.71 5.395 12.47 8.503 20.442 6.353 4.035-1.089 5.54.3 6.985 3.796 4.001 9.677 3.664 10.505-6.742 12.289-14.446 2.476-33.936-7.865-40.365-21.417-6.144-12.95-2.413-28.817 9.23-38.875 5.954-5.144 12.953-7.335 21.264-6.913m-7.798 23.2 23.637 8.867c1.757-6.633-.99-12.14-7.048-15.163-6.255-3.122-14.415-1.92-17.802 2.55-1.121 1.48-1.352 2.642 1.213 3.745zM801.319 469.288c-3.6 1.027-4.827-.617-5.571-3.51a2473.014 2473.014 0 0 0-9.478-35.658c-.455-1.666-.21-3.742-2.282-5.014-4.7 2.267-6.297 6.601-6.611 11.32-.474 7.12 1.52 13.682 7.095 18.396 3.08 2.604 3.097 4.695.734 7.44-.214.248-.35.564-.526.846-5.17 8.259-6.635 8.394-13.225 1.224-10.77-11.718-13.63-32.988-6.135-45.633 6.504-10.972 21.124-17.882 33.245-15.713 14.578 2.609 24.996 13.053 27.745 27.816 3.472 18.639-5.504 32.65-24.991 38.486m10.153-28.715c1.441-12.32-5.151-20.77-15.09-18.485 2.412 8.847 4.054 17.88 7.31 26.694 4.385-1.249 6.066-4.234 7.78-8.209zM783.97 654.2c7.852 14.46 5.4 27.795-3.87 39.988-8.409 11.057-19.713 16.207-33.797 13.203-20.22-4.312-31.052-25.02-23.103-44.643 5.195-12.824 14.334-21.937 28.456-23.874 13.54-1.856 24.339 3.736 32.314 15.326m-24.45 34.9c7.587-2.642 12.633-9.253 12.059-15.798-.659-7.5-8.33-15.12-16.163-16.057-7.654-.916-13.598 2.722-16.393 10.034-4.33 11.326 6.387 23.29 20.498 21.82zM225.986 438.18c.603-2.636 1.461-4.83 1.105-7.17-5.765-1.523-9.535.282-12.004 5.79-2.77 6.182-2.68 12.704-1.453 19.117.665 3.479-.22 4.68-3.519 5.52-11.203 2.855-11.46 2.746-12.55-8.964-.867-9.322.714-18.208 4.737-26.628 5.821-12.181 15.291-17.35 28.496-14.647 11.711 2.397 23.236 5.71 34.845 8.607 2.738.683 3.944 2.082 2.963 5.063-.88 2.677-1.591 5.44-2.039 8.22-.578 3.59-2.086 5.567-6.81 3.977 3.953 9.039 3.27 17.373-.393 25.522-2.864 6.369-7.216 11.261-14.38 12.668-13.703 2.689-24.05-7.892-21.985-22.526.672-4.759 1.903-9.44 2.987-14.55m11.067 16.245c2.13 2.41 4.76 2.992 7.635 1.727 3.64-1.602 5.794-7.597 5.025-13.64-.552-4.346-2.803-7.343-7.126-8.6-1.317-.383-3.08-.828-3.437.772-1.405 6.285-5.336 12.277-2.097 19.74zM327.156 269.402c-9.066 2.144-14.334 8.206-17.807 15.885-1.599 3.536-3.108 3.807-6.4 2.267-10.087-4.716-10.364-5.202-4.407-14.583 5.591-8.808 13.177-15.37 22.678-19.683 9.314-4.229 18.063-3.003 25.512 3.819 10.243 9.381 17.47 21.36 26.392 31.896 1.32 1.56 1.022 3.025-.56 4.299-2.593 2.086-5.22 4.137-7.719 6.331-2.461 2.161-4.775 3.122-7.437-1.152-2.018 8.967-7.238 14.612-13.96 18.882-6.81 4.324-14.135 6.118-21.74 2.088-9.326-4.941-12.45-16.102-7.234-25.252 3.113-5.462 7.797-9.472 12.61-13.355 2.814-2.27 6.027-4.095 8.422-7.07-1.797-3.39-4.673-4.261-8.35-4.372m3.093 32.905c6.607 4.461 16.651-1.334 17.403-10.053.205-2.375-.154-4.556-1.729-6.54-1.507-1.9-2.941-2.52-4.97-.814-3.043 2.559-6.375 4.824-9.143 7.647-2.41 2.458-4.761 5.4-1.561 9.76zM296.89 746.653c-2.985-9.083-.838-16.962 4.516-23.862 7.137-9.2 14.796-17.994 22.124-27.05 2.036-2.515 3.85-2.716 6.195-.53 1.946 1.812 3.982 3.553 6.13 5.116 2.988 2.176 5.388 4.323.669 8.218 11.614-.292 18.905 5.496 24.767 13.345 5.624 7.53 5.42 17.133.032 23.604-6.07 7.292-14.024 8.73-23.392 4.24-3.93-1.882-7.473-4.338-10.803-7.135-3.174-2.666-6.402-5.267-9.582-7.877-4.09 4.128-4.298 8.688-.582 13.348 4.209 5.277 9.735 8.623 16.341 9.827 4.066.741 4.98 2.45 4.101 6.481-2.238 10.276-2.805 10.89-12.652 7.027-12.122-4.755-22.25-11.962-27.865-24.752m31.314-18.377c3.58 2.63 6.606 6.06 10.908 7.643 4.612 1.698 9.275-2.184 8.42-6.975-1.3-7.298-13.23-12.367-19.256-8.107-2.806 1.985-4.332 4.31-.072 7.44zM799.602 508.438c10.86 4.32 21.347 8.578 31.92 12.612 3.262 1.244 4.827 3.104 4.664 6.665-.188 4.112-.044 8.24-.044 12.004-1.976 1.528-3.32.565-4.659.034-17.948-7.116-35.85-14.354-53.863-21.3-4.386-1.691-5.542-4.26-6.14-8.853-1.302-10.007 2.202-15.142 11.824-18.744 15.717-5.884 30.805-13.446 46.165-20.286 1.348-.6 2.635-1.46 4.855-1.165 1.525 5.802 1.185 11.867.417 17.868-.245 1.91-2.717 2.256-4.357 2.975-11.718 5.141-23.457 10.236-35.283 15.385.86 2.074 2.844 1.83 4.5 2.805zM242.215 483.743c13.69.45 13.69.45 13.06 13.695-.3 6.297-.745 6.529-7.12 6.092-21.751-1.488-43.511-2.852-65.266-4.278-2.159-.141-4.32-.315-6.465-.584-8.979-1.124-8.978-1.14-8.734-10.373.022-.833.044-1.666.09-2.497.38-6.931.655-6.897 7.686-6.395 18.098 1.292 36.216 2.31 54.324 3.454 3.987.252 7.97.575 12.425.886zM753.708 606.656c1.517-2.55 3.233-1.678 4.96-.946 24.205 10.266 48.395 20.57 72.645 30.733 3.389 1.42 4.302 3.066 2.52 6.403-1.485 2.778-2.68 5.739-3.72 8.717-1.339 3.832-3.554 4.04-6.957 2.578-23.39-10.058-46.8-20.068-70.284-29.902-4.226-1.769-5.881-3.7-3.354-8.106 1.645-2.868 2.701-6.074 4.19-9.477zM231.935 670.076c-1.02-1.135-1.74-2.062-2.571-2.876-3.058-3-2.792-5.379 1.225-7.16.605-.267 1.144-.681 1.72-1.015 2.732-1.58 5.124-4.485 8.212-4.51 3.358-.026 3.68 4.226 5.723 6.303 5.292 5.38 11.612 6.383 19.115 2.043 7.642-4.42 15.176-9.052 22.51-13.96 3.575-2.393 5.51-1.733 7.427 1.81 2.123 3.923 4.59 7.66 7.203 11.966-5.732 3.614-11.03 6.999-16.372 10.314-11.183 6.94-22.454 13.743-33.546 20.825-3.24 2.068-5.305 2.186-7.05-1.575-.976-2.102-2.254-4.1-3.633-5.97-2.489-3.374-3.69-6.458 2.118-9.164-4.928-1.77-8.793-3.636-12.081-7.031zM291.31 685.289c5.01-4.167 9.827-8.014 14.464-12.066 2.381-2.08 4.085-2.251 6.089.498 2.152 2.953 4.604 5.703 7.081 8.4 1.96 2.134 2.133 3.69-.32 5.728a5110.934 5110.934 0 0 0-42.814 36.009c-2.51 2.133-4.069 1.658-6.197-.626-10.126-10.87-10.198-10.826.852-20.265 6.838-5.84 13.717-11.631 20.845-17.678zM234.104 644.186c-2.023.88-3.697 1.613-5.373 2.342-7.32 3.182-7.45 3.235-10.53-4.336-4.964-12.201-6.186-9.358 6.092-14.789 14.28-6.316 28.701-12.323 42.881-18.855 4.356-2.007 6.278-1.012 7.676 3.164.892 2.666 2.079 5.263 3.398 7.75 1.811 3.417 1.063 5.236-2.63 6.78-13.792 5.765-27.454 11.837-41.514 17.944zM406.553 272.804c-6.12-4.367-8.223-9.925-5.974-15.047 2.169-4.94 7.841-8.195 12.87-7.384 6.666 1.076 11.102 7.593 9.757 14.334-1.402 7.024-8.332 10.542-16.653 8.097zM552.028 767.91c6.261-3.391 11.457-3.092 15.465.643 3.666 3.416 4.852 8.778 2.919 13.201-1.961 4.487-6.536 7.587-11.457 7.31-4.633-.26-8.209-2.472-10.118-6.879-2.311-5.333-1.267-10.017 3.191-14.274zM211.534 651.33c-2.588 6.905-7.395 9.777-13.036 8.11-5.594-1.651-9.778-8.788-8.572-14.62 1.145-5.533 6.192-8.94 11.935-8.056 5.89.907 9.895 6.724 9.673 14.567zM261.924 737.516c-3.411 4.56-7.667 6.002-12.535 4.152-5.06-1.923-7.886-6.064-8.502-11.373-.623-5.368 3.978-10.278 9.572-10.697 6.048-.453 12.167 4.685 12.8 10.838.24 2.32.238 4.656-1.335 7.08z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
