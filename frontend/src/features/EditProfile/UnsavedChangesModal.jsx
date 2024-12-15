import Modal from '../../components/EditProfile/Modal';

const UnsavedChangesModal = ({ isOpen, onClose: handleModalClose, onDiscard: handleDiscard }) => (
  <Modal isOpen={isOpen} onClose={handleModalClose}>
    <h2 className="text-xl font-semibold text-center">Unsaved Changes</h2>
    <p className="text-sm text-gray-600 mt-2 text-center">
      Are you sure you want to discard your unsaved changes?
    </p>
    <div className="flex justify-center mt-6 space-x-4">
      <button
        type="button"
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        onClick={handleModalClose}
      >
        Cancel
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={handleDiscard}
      >
        Discard
      </button>
    </div>
  </Modal>
);

export default UnsavedChangesModal;