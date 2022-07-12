import React from 'react';

const ConfirmationModal = ({ setOpenModal, handleOrderDelete, orders }) => {
   const { _id } = orders[0];
   console.log(_id)
   return (
      <div>
         <input type="checkbox" id="order-canceling-modal" className="modal-toggle" />
         <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
               <label
                  onClick={() => setOpenModal(false)}
                  htmlFor="order-canceling-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 className="font-bold text-lg">Deleting the Item</h3>
               <p className="py-4">Are you sure you want to delete the item from your order?</p>
               <div className="modal-action">
                  <label
                     onClick={() => handleOrderDelete(_id)}
                     htmlFor="order-canceling-modal"
                     className="btn">Continue</label>
                  <label
                     onClick={() => setOpenModal(false)}
                     htmlFor="order-canceling-modal"
                     className="btn">Cancel</label>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ConfirmationModal;