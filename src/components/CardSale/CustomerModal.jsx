import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CustomerDetailsModal = ({
  isOpen,
  onClose,
  customerName,
  customerPlatformName,
  customerTeam,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <div>
          <h2>Customer Details</h2>
          <p>Name: {customerName}</p>
          <p>Platform Name: {customerPlatformName}</p>
          <p>Team: {customerTeam}</p>
        </div>
      </Box>
    </Modal>
  );
};

CustomerDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  customerName: PropTypes.string.isRequired,
  customerPlatformName: PropTypes.string.isRequired,
  customerTeam: PropTypes.string.isRequired,
};

export default CustomerDetailsModal;
