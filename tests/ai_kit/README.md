# Testes de compatibilidade do AIKIT

Importados de technetalks no commit `6c402cd614fcce0366db27024ad9cd9a56b3bc59`. Apenas os caminhos de localização do kit foram adaptados para `tools/ai-kit/` e para a pasta de testes deste projeto; os 13 cenários foram preservados.

Executar na raiz: `python -m unittest discover -s tests/ai_kit -v` (macOS: `python3`). Os testes usam diretórios temporários e não dependem de rede, credenciais ou plugins. A fixture mínima usa `--without-matt`; o perfil completo real é conferido separadamente por `validate .` e pelo lock de Matt Pocock.
