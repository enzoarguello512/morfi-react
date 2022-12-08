import { useState, useEffect, useRef } from 'react';
import { socket } from '../../services/Socket';
import moment from 'moment';
import { IUser } from 'common/types/user.interface';
import { useAppDispatch, useAppSelector } from 'hooks/preTyped';
import {
  addMessage,
  selectCurrentUser,
  selectMessages,
  setMessages,
} from 'features/user/userSlice';
import { IMessage } from 'common/types/message.interface';
import { toast } from 'react-toastify';

const ChatChannel = () => {
  // Selectors
  const user: IUser = useAppSelector(selectCurrentUser);
  const messages: Array<IMessage> = useAppSelector(selectMessages);

  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false); // In charge of managing the loading status of the "Send" button

  // Refs
  const isUnitialized = useRef(true); // To avoid socket.io errors
  const loadedMessages = useRef(false); // To keep track if it is the first time the user sees the chat

  // Messages
  const chatBoxRef = useRef<HTMLUListElement>(null); // In charge of managing the scroll of the message box
  const [messageText, setMessageText] = useState(''); // Input

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (messageText && !isLoading) {
      socket.emit('new message', user.id, messageText);
      setMessageText('');
      setLoading(true);
    } else {
      toast.warning('The message cannot be empty');
    }
  };

  useEffect(() => {
    // To prevent duplicate errors with Socket.io
    if (isUnitialized.current === true) {
      isUnitialized.current = false;

      // Event handlers
      socket.emit('get messages', user.id);
      socket.on('messages', (msgs: Array<IMessage>) => {
        dispatch(setMessages(msgs));
        loadedMessages.current = true;
      });
      socket.on('messages error', (err) => {
        toast.error(err.message);
      });
      socket.on('new message saved', (msgs: Array<IMessage>) => {
        dispatch(addMessage(msgs));
        setLoading(false);
      });
    }

    // This is responsible for generating a welcome message to the user (only if it's the first time!)
    if (loadedMessages.current && messages.length === 0) {
      socket.emit('new message', user.id, 'welcomeMessage');
    }
  }, [dispatch, messages, user.id]);

  // This is responsible for scrolling to adjust to the new messages received
  useEffect(() => {
    if (chatBoxRef.current && messages.length !== 0) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Box in charge of controlling all messages
  const MessageBox =
    // We wait for the messages to load
    isUnitialized.current === true || messages.length === 0 ? (
      <li className="d-flex align-items-center justify-content-center h-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </li>
    ) : (
      // Otherwise we show the messages
      messages.map((msg) => {
        const isUser = msg.type === 'user' ? true : false;
        return (
          <li
            className={'row ' + (isUser && 'justify-content-end')}
            key={msg.id}
          >
            <div
              className={`bg-gradient col-8 rounded mb-3 border border-1 border-dark ${
                isUser ? 'bg-darker-5' : 'bg-white'
              }`}
            >
              <div className="p-2">
                <div
                  className={`fw-bold ${isUser ? 'text-white' : 'text-dark'}`}
                >
                  {isUser ? user.email : 'System'}
                </div>

                {msg.text.split('\n').map((text, index) => (
                  <span
                    className={`d-block ${isUser ? 'text-white' : 'text-dark'}`}
                    key={index}
                  >
                    {text}
                  </span>
                ))}
                <div className={'text-darker-3 pt-2'}>
                  {moment(msg.createdAt).format('DD/MM/YYYY hh:mm:ss')}
                </div>
              </div>
            </div>
          </li>
        );
      })
    );

  return (
    <div className="m-5 px-5 bg-light-2">
      <h1 className="text-darker-5 text-center pt-3 mb-3">Message center</h1>
      <div className="text-center">
        Logged in as{' '}
        <span className="badge bg-primary bg-gradient me-1">{user.email}</span>
      </div>
      <div className="bg-light">
        <hr />
        <ul
          className="list-unstyled h-500px px-5 py-2 overflow-auto"
          ref={chatBoxRef}
        >
          {MessageBox}
        </ul>
        <hr />
      </div>
      <form className="row align-items-end" onSubmit={handleSubmit}>
        <div className="col-9">
          <label className="form-label" htmlFor="text">
            Your message
          </label>
          <input
            className="form-control"
            type="text"
            name="text"
            placeholder="Enter a message"
            value={messageText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setMessageText(e.target.value);
            }}
          />
        </div>
        <div className="col-3">
          <button
            className="btn btn-dark bg-gradient w-100"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div
                className="spinner-border spinner-border-sm text-white"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatChannel;
