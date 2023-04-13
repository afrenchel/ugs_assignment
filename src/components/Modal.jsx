import React from "react";

import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineClose,
} from "react-icons/ai";
import { GiModernCity } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

const Modal = ({ isOpen, setIsOpen, user, data }) => {
  //Functions
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`modal-overlay ${isOpen ? "show-modal" : ""}`}>
      <div className={`modal-container`}>
        <div className="modal-header">
          <h2 className="modal-title">{user?.name}</h2>
        </div>
        <ul className="modal-info">
          <li>
            <span>
              <AiOutlineUser />
            </span>

            {user?.username}
          </li>
          <li>
            <span>
              <GiModernCity />
            </span>
            {user?.address?.city}
          </li>
          <li>
            <span>
              <AiOutlineMail />
            </span>
            {user?.email}
          </li>
          <li>
            <span>
              <AiOutlinePhone />
            </span>
            {user?.phone}
          </li>
          <li>
            <span>
              <CgWebsite />
            </span>
            {user?.website}
          </li>
        </ul>
        <button class="btn-close-modal" onClick={handleCloseModal}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Modal;
