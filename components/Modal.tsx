import Cn from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  isVisible: boolean;
  id?: number;
  onClose: () => void;
  trailerEndPoint?: string;
}

const Modal = ({ isVisible, id, onClose, trailerEndPoint }: Props) => {
  return (
    <div
      id={id + ''}
      className={Cn(
        'fixed inset-0 z-20 overflow-auto bg-black/[40%] flex-center-center',
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    >
      <div className="relative lg:w-4/5 w-1/2 p-8 bg-body">
        <iframe
          src={`https://www.youtube.com/embed/${trailerEndPoint}`}
          width="100%"
          height="500px"
          title="trailer"
        />
        <div
          onClick={onClose}
          className="absolute top-[5px] right-[5px] cursor-pointer hover:text-main"
        >
          <AiOutlineClose size={20} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
