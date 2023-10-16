import React, { useEffect, useState } from "react";
import CustomModal from "./Modal";
import useRegisterModal from "../../../hooks/useRegisterModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (!isRender) {
    return null;
  }

  return (
    <div>
      <CustomModal
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        title="Register"
        subtitle="Register Here"
        body={<BodyContent />}
      />
    </div>
  );
};

const BodyContent = () => {
  return <div>Hello World</div>;
};

export default RegisterModal;
