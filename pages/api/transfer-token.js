import { exec } from 'child_process';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end(); // Method Not Allowed
        return;
    }

    const { recipient } = req.body;

    // Asegúrate de reemplazar estos valores según sea necesario
    const tokenMintAddress = 'asyvdzKqaHzopHa5XeNDN7ZYPDVEArD4ZfDZQt4sDHX';
    const amount = 1;

    // Comando para ejecutar la transferencia
    const command = `spl-token transfer ${tokenMintAddress} ${amount} ${recipient}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${stderr}`);
            res.status(500).json({ message: `Error: ${stderr}` });
            return;
        }

        console.log(`Output: ${stdout}`);
        res.status(200).json({ message: stdout });
    });
}
