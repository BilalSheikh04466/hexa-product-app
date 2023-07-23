import Cookies from "js-cookie";

const Welcome = () => {
  const val = Cookies.get("jwt");
  console.log(val);
  return <div>HII</div>;
};

export default Welcome;
