import { toast, Slide } from 'react-toastify';

export const errMsg = (msg: string) => {
  toast.error(msg, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Slide,
  });
};
