import { useState, useEffect } from 'react';
import { socket } from '../../services/Socket';
import moment from 'moment';
import { IUser } from 'common/types/user.interface';
import { useAppSelector } from 'hooks/preTyped';
import { selectCurrentUser } from 'features/user/userSlice';

const ChatChannel = () => {
  //const { data: messages, status } = useAppSelector((state) => state.messages);

  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('idle');

  const user: IUser = useAppSelector(selectCurrentUser);

  const [formValues, setFormValues] = useState({
    email: user ? user.email : '',
    text: '',
  });
  const { email, text } = formValues;

  useEffect(() => {
    // if (dataUser && status === 'idle') {
    socket.emit('get messages', user.email);
    socket.on('messages', (data) => {
      // dispatch(setMessages({ data }));
      setMessages(data);
    });
    socket.on('messages error', (data) => {
      // toast.warning(data.message);
    });
    // }
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('new message', formValues);

    setFormValues({
      ...formValues,
      text: '',
    });

    socket.on('new message saved', (data) => {
      setMessages(data);
    });
  };

  return (
    <div className="m-5 px-5 bg-light-2">
      <h1 className="text-primary text-center pt-3 mb-3">Message center</h1>
      <div className="text-center">
        Logged in as{' '}
        <span className="badge bg-primary bg-gradient me-1">{email}</span>
      </div>
      <div className="bg-light">
        <hr />
        <ul className="list-unstyled h-400px">
          {messages.length === 0 ? (
            <li className="d-flex align-items-center justify-content-center h-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </li>
          ) : (
            messages.map((msg) => (
              <li key={msg.id}>
                <span className="text-primary fw-bold">{msg.user.email}</span>
                <small className="text-danger">
                  {moment(msg.createdAt).format('DD/MM/YYYY hh:mm:ss')}
                </small>
                <span className="text-success">{msg.text}</span>
              </li>
            ))
          )}
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
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-success w-100" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatChannel;
