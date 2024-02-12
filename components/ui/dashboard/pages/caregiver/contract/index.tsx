import React, { useState } from "react";
import TerminateArea from "./TerminateArea";
import ContactList from "./ContactList";
import TerminateAskModal from "../../../Modals/TerminateAskModal";

export default function ContractPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isTerminated, setTerminated] = useState(false);
  return (
    <div className="mr-8 bg-blurColor">
      {!isTerminated ? (
        <ContactList open={modalOpen} setModalOpen={setModalOpen} />
      ) : (
        <TerminateArea open={modalOpen} setModalOpen={setModalOpen} />
      )}
      <TerminateAskModal
        open={modalOpen}
        setModalOpen={setModalOpen}
        setTerminated={setTerminated}
      />
    </div>
  );
}
