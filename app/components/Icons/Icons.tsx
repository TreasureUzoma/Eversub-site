const Icons = ({
  type = "",
  color = "black",
  width = "24px",
  height = "24px",
}) => {
  switch (type) {
    case "link":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width={width}
          height={height}
          fill={color}
        >
          <path d=""></path>
        </svg>
      );
      
    case "menu":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width={width}
          height={height}
          fill={color}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      );
   default:
      null;
  }
};

export default Icons;
