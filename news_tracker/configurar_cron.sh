#!/usr/bin/env bash
# Configura o cron para executar a rotina toda segunda-feira às 9h.
# Execute uma vez: bash configurar_cron.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PYTHON="$(command -v python3)"
SCRIPT="$SCRIPT_DIR/buscar_noticias.py"
LOG="$SCRIPT_DIR/noticias.log"

# Linha cron: minuto hora * * dia_da_semana (1 = segunda-feira)
CRON_LINE="0 9 * * 1 $PYTHON $SCRIPT >> $LOG 2>&1"

# Verifica se já existe para evitar duplicata
if crontab -l 2>/dev/null | grep -qF "$SCRIPT"; then
    echo "Cron já configurado. Nenhuma alteração feita."
    crontab -l | grep "$SCRIPT"
    exit 0
fi

# Adiciona ao crontab atual
(crontab -l 2>/dev/null; echo "$CRON_LINE") | crontab -

echo "Cron configurado com sucesso:"
echo "  $CRON_LINE"
echo ""
echo "Para verificar: crontab -l"
echo "Para remover:   crontab -e  (apague a linha manualmente)"
