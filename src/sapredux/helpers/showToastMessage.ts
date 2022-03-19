import toast from 'react-hot-toast';

// export const showToastMessage = (type:string="success", message:string='Alert', position:any = 'top-right') => {
export const showToastMessage = ({type="success", message='Alert', position = 'bottom-right'}:any) => {
	switch (type) {
    case 'success':
      return toast.success(message, {
        position: position,
      })
    case 'error':
        return toast.error(message, {
          position: position,
        });
    case 'loading':
      return toast.loading(message, {
        position: position,
      });
    default:
      return toast.success(message, {
        position: position,
      });
  }
}
