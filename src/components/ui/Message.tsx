import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import { MessageType } from "../../types/messageType"
import classNames from "classnames"
import { convertTimestampToTime } from "../../utils/convertTimestampToDate"

const Message = ({ message }: { message: MessageType }) => {
  const [user] = useAuthState(auth)

  if (!user) return ""

  // console.log(message, user)

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
      <div className="block">
        <div
          className={classNames(
            "py-1 text-left px-6 border rounded-3xl min-w-[100px]",
            message.uid === user.uid
              ? "rounded-tr-none bg-lime-300"
              : "rounded-tl-none bg-slate-100"
          )}
        >
          <p className="user-message">{message.text}</p>
        </div>
        <small
          className={classNames(
            "text-xs font-semibold text-gray-600 block",
            message.uid === user.uid ? "text-end mr-1" : "text-start ml-1"
          )}
        >
          {convertTimestampToTime(message.createdAt)}
        </small>
      </div>
    </div>
  )
}
export default Message
