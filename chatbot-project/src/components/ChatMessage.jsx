import dayjs from 'dayjs';
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/image2.jpg';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
  const time = dayjs().valueOf();

  return (
    <div
      className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}
    >
      {sender === 'robot' && (
        <img
          className="chat-image-profile"
          src={RobotProfileImage}
          width="50"
        />
      )}
      <div className="chat-message-text">
        {message}
        <div>
          <p className="chat-message-time">{dayjs(time).format('h:mma')}</p>
        </div>
      </div>

      {sender === 'user' && (
        <img className="chat-image-profile" src={UserProfileImage} width="50" />
      )}
    </div>
  );
}
