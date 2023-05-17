import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed</div>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};

export default Order;
