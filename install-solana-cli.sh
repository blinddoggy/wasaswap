#!/bin/bash

# Instalar la CLI de Solana
sh -c "$(curl -sSfL https://release.solana.com/v1.18.17/install)"

# Agregar Solana CLI al PATH
export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"

# Verificar instalación
solana --version

# Configurar Solana CLI con la clave de pago predeterminada
solana config set --keypair $SPL_TOKEN_KEYPAIR_PATH
