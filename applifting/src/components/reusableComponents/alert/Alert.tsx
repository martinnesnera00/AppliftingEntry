import { Alert as ANTAlert } from "antd";

import { useAppDispatch, useAppSelector } from "../../../store/Store";
import { removeMessage } from "../../../slices/MessageSlice";

export const Alert = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector((state) => state.message);

  if (!message.content) return null;

  return (
    <ANTAlert
      type={message.type}
      banner
      closable
      message={message.content}
      onClose={() => dispatch(removeMessage())}
    />
  );
};
