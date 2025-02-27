import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
// import { getAllAreas } from "../../store/allAreas";
import SpotAddForm from "../SpotAddForm";
import PleaseLogin from "../parts/PleaseLogin";
import styles from "./SpotAddModal.module.css";
import "../../index.css";

function SpotAddModal({ selectedArea, isUsingUserLocation }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showSpotAddModal, setShowSpotAddModal] = useState(false);
  const [showPleaseLoginModal, setShowPleaseLoginModal] = useState(false);
  // const dispatch = useDispatch();

  // const allAreas = useSelector((state) =>
  //   Object.values(state.allAreas)
  // );

  // useEffect(() => {
  //   dispatch(getAllAreas());
  // }, [dispatch]);

  const handleClick = () => {
    if (sessionUser) {
      setShowSpotAddModal(true);
    } else {
      setShowPleaseLoginModal(true);
    }
  };

  return (
    <>
      <button
        style={{ height: "2rem" }}
        onClick={handleClick}
        className={styles.addSpotButton}
      ></button>
      {showSpotAddModal && (
        <Modal onClose={() => setShowSpotAddModal(false)}>
          <SpotAddForm
            onClose={() => setShowSpotAddModal(false)}
            selectedArea={selectedArea}
            isUsingUserLocation={isUsingUserLocation}
          />
        </Modal>
      )}
      {showPleaseLoginModal && (
        <Modal onClose={() => setShowPleaseLoginModal(false)}>
          <PleaseLogin setShowPleaseLoginModal={setShowPleaseLoginModal} />
        </Modal>
      )}
    </>
  );
}

export default SpotAddModal;
