# Retrocesso e busca de alternativas

```text
AO_FALHAR()
    voltar ao ponto de escolha mais recente

    se existir outra cláusula ou fato ainda não tentado:
        restaurar o estado lógico anterior
        tentar a próxima alternativa
    caso contrário:
        continuar retrocedendo

    se nenhum ponto de escolha permanecer:
        retornar falha
```

## Ideia central

O retrocesso não 'corrige' uma regra. Ele restaura uma escolha anterior e explora outra alternativa disponível.

Quando o usuário solicita outra resposta após uma solução, o mesmo mecanismo pode ser usado para procurar novas substituições.
