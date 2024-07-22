import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { request } from '../../api/request';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router';
import { Spin } from 'antd';
import { twMerge } from 'tailwind-merge';

export default function DeleteAccount() {
  const [isOpen, setIsOpen] = useState(false);
  const [sure, setSure] = useState(false);
  const [loading, setLoading] = useState(false)
  const {setUserDetails} = useContext(UserContext)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setSure(false);
    reset();
  }

  const openSure = () => {
    setSure(true);
  }

  const onSubmit = (data) => {
    setLoading(true)
    request.post('/user/delete-account' , data)
    .then(res=>{
      setUserDetails([])
      sessionStorage.removeItem("hotel")
      toast.success(res.data.message)
      navigate("/")
      close()
    })
    .catch((error)=>{
      toast.error(error.response.data.message)
    })
    .finally(()=>{
      setLoading(false)
    })
  }

  return (
    <>
      <Button
        onClick={open}
        className={twMerge("btn bg-red-500 text-white")}
      >
        delete account
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 w-screen overflow-y-auto bg-black/20 z-50">
          {
            sure ? (
              <div className="flex min-h-full items-center justify-center p-4 ">
                <DialogPanel
                  transition
                  className="w-full max-w-md rounded-xl bg-white text-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                >
                  <DialogTitle as="h3" className="text-base/7 font-medium ">
                    Deleting your account
                  </DialogTitle>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <div className="mb-4">
                      <input
                        className={`input ${errors.password ? 'border-red-500' : ''}`}
                        placeholder='Confirm your password'
                        type='password'
                        {...register('password', { required: 'Password is required' })}
                      />
                      {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <Button
                        type="submit"
                        className="btn btn-primary "
                      >
                        {loading? <Spin /> : "confirm"}
                      </Button>
                      <Button
                        type="button"
                        className="btn border border-primary text-primary hover:bg-primary hover:text-white duration-300"
                        onClick={close}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </DialogPanel>
              </div>
            ) : (
              <div className="flex min-h-full items-center justify-center p-4 ">
                <DialogPanel
                  transition
                  className="w-full max-w-md rounded-xl bg-white text-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                >
                  <DialogTitle as="h3" className="text-base/7 font-medium ">
                    Deleting your account
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 ">
                    You are about to permanently delete your account. Are you sure you want to delete your account?
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Button
                      className="btn btn-primary"
                      onClick={openSure}
                    >
                    
                      Sure
                    </Button>
                    <Button
                      className="btn border border-primary text-primary hover:bg-primary hover:text-white duration-300"
                      onClick={close}
                    >
                      Cancel
                    </Button>
                  </div>
                </DialogPanel>
              </div>
            )
          }
        </div>
      </Dialog>
    </>
  );
}
