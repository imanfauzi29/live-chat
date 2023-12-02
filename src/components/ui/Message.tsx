import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import { MessageType } from "../../types/messageType"
import classNames from "classnames"
import { convertTimestamp } from "../../utils/convertTimestampToDate"

const Message = ({ message }: { message: MessageType }) => {
  const [user] = useAuthState(auth)

  if (!user) return ""

  return (
    <div
      className={classNames(
        "flex max-w-[300px] gap-6 my-2",
        message.uid === user.uid
          ? "place-self-end flex-row-reverse"
          : "place-self-start"
      )}
    >
      <img
        className="w-10 h-10 rounded-full"
        src={message.avatar}
        alt="user avatar"
      />
      <div
        className={classNames(
          "py-1 text-left px-6 border rounded-2xl min-w-[100px]",
          message.uid === user.uid
            ? "rounded-tr-none bg-lime-300"
            : "rounded-tl-none bg-slate-100"
        )}
      >
        <p className={classNames("text-sm font-semibold")}>
          {message.uid === user.uid ? "You" : message.displayName} &#x2022;{" "}
          <small className="font-normal text-gray-600">
            {convertTimestamp(message.createdAt)}
          </small>
        </p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  )
}
export default Message
