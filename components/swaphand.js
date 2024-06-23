import { useState } from 'react';
import { Button, TextField, CircularProgress, Alert } from "@mui/material";
import PropTypes from "prop-types";
import { sendSol } from '../utils/api';

const Swap = ({ className = "" }) => {
  const [secretKey, setSecretKey] = useState('');
  const [toPublicKey, setToPublicKey] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const data = {
        secretKey,
        toPublicKey,
        amount,
      };
      const result = await sendSol(data);
      setSuccess(result.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`flex flex-col items-center justify-center pt-0 px-0 pb-[120px] box-border max-w-full text-left text-221xl font-space-grotesk lg:pb-[78px] mq825:pb-[51px] ${className}`}
    >
      <div className="h-auto w-full bg-black1 overflow-hidden flex flex-col items-center justify-start relative max-w-full lg:h-auto">
        <div className="w-full flex flex-col items-center justify-start py-0 px-5 lg:px-16 xl:px-32 gap-4 opacity-100 z-1">
          <TextField
            label="Secret Key"
            variant="outlined"
            fullWidth
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            className="mb-4"
          />
          <TextField
            label="To Public Key"
            variant="outlined"
            fullWidth
            value={toPublicKey}
            onChange={(e) => setToPublicKey(e.target.value)}
            className="mb-4"
          />
          <TextField
            label="Amount"
            variant="outlined"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-4"
          />
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#14f195",
              borderRadius: "44px",
              "&:hover": { background: "#14f195" },
              height: 44,
            }}
          >
            {loading ? <CircularProgress size={24} /> : 'Send SOL'}
          </Button>
        </div>
      </div>
    </section>
  );
};

Swap.propTypes = {
  className: PropTypes.string,
};

export default Swap;
