
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options = {
    position: "top-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

const toastSuccess = (message) => toast.success("🦄 Sukces: " + message, options);

const toastWarn = (message) => toast.warn("🦄 Mamy problem: " + message, options);

const toastDefault = (message) => toast("🦄 Informacja: " + message, options);

export default {
    toastSuccess,
    toastWarn,
    toastDefault
}