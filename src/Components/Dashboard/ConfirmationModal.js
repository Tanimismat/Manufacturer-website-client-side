import React from 'react';

const ConfirmationModal = () => {
   return (
      <div>
         <input type="checkbox" id="order-canceling-modal" className="modal-toggle" />
         <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
               <label htmlFor="order-canceling-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 className="font-bold text-lg">Deleting the Item</h3>
               <p className="py-4">Are you sure you want to delete the item from your order?</p>
               <div className="modal-action">
                  <label htmlFor="order-canceling-modal" className="btn">Continue</label>
                  <label htmlFor="order-canceling-modal" className="btn">Cancel</label>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ConfirmationModal;