import { FormEvent, useEffect, useState } from "react"
import { auth, db } from "../../firebase"
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore"
import { MessageType } from "../../types/messageType"
import Message from "./Message"
import Button from "../Button"
import { FaTelegramPlane } from "react-icons/fa"

const Chat = () => {
  const [message, setMessage] = useState("")
  const [listMessage, setListMessage] = useState<MessageType[]>([])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    )
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fetchedMessages: { [key: string]: any }[] = []
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id })
      })
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      )

      setListMessage(sortedMessages as MessageType[])
    })
    return () => unsubscribe()
  }, [])

  // submit message to firebase
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (message.trim() === "") {
      alert("Enter valid message")
      return
    }

    if (!auth.currentUser) return

    const { uid, displayName, photoURL } = auth.currentUser

    await addDoc(collection(db, "messages"), {
      text: message,
      displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid
    })
  }

  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <div className="flex flex-col">
        {listMessage &&
          listMessage.map((msg, i) => <Message key={i} message={msg} />)}
      </div>

      <form className="flex gap-4 mt-5" onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="message"
          placeholder="type here..."
          className="flex w-full py-2.5 px-6 border rounded-md outline-none focus:ring-2 ring-blue-300 pr-24"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" title="Send" icon={FaTelegramPlane} />
      </form>
    </div>
  )
}

export default Chat
