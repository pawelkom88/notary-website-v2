import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Messanger() {
  return (
    <MessengerCustomerChat pageId={process.env.MESSANGER_CHAT_ID} appId={process.env.APP_ID} />
  );
}
