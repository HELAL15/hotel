
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { request } from '../../api/request';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router';
import { Modal, Spin } from 'antd';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

export default function DeleteAccount() {

  const {t} = useTranslation()


  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const close = () => {
    setModal1Open(false);
    setModal2Open(false);
    reset();
  };

  const openSure = () => {
    setModal1Open(true);
    setModal2Open(false);
  };

  const onSubmit = (data) => {
    setLoading(true);
    request.post('/user/delete-account', data)
      .then(res => {
        setUserDetails([]);
        localStorage.removeItem("hotel");
        toast.success(res.data.message);
        navigate("/");
        close();
      })
      .catch(error => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <button className={twMerge("btn bg-red-500 text-white")} onClick={() => setModal2Open(true)}>
        {t("profile.delete.btn")}
      </button>

      <Modal
        title={t("profile.delete.title")}
        centered
        open={modal2Open}
        footer={null}
        onCancel={close}
      >
        <p className="mt-2 text-sm">
        {t("profile.delete.p")}
        </p>
        <div className="mt-4 flex items-center gap-4">
          <button
            className="btn btn-primary"
            onClick={openSure}
          >
            {t("profile.delete.sure")}
          </button>
          <button
            className="btn border border-primary text-primary hover:bg-primary hover:text-white duration-300"
            onClick={close}
          >
          
            {t("profile.delete.cancel")}
          </button>
        </div>
      </Modal>

      <Modal
        title={t("profile.delete.title")}
        centered
        open={modal1Open}
        footer={null}
        onCancel={close}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="mb-4">
            <input
              className={`input ${errors.password ? 'border-red-500' : ''}`}
              placeholder= {t('profile.delete.pass')}
              type="password"
              {...register('password', { required: t("profile.password.validation.password")})}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <button
              type="submit"
              className="btn btn-primary"
            >
              {loading ? <Spin /> : t("profile.delete.confirm")}
            </button>
            <button
              type="button"
              className="btn border border-primary text-primary hover:bg-primary hover:text-white duration-300"
              onClick={close}
            >
             {t("profile.delete.cancel")}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
