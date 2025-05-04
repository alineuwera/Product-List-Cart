function OrderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4">✅ Order Confirmed!</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase.</p>
        <button
          onClick={onClose}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
