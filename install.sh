#!/bin/bash

# Lê todas as dependências do package.json
dependencies=$(jq -r '.dependencies | keys[]' package.json)

# Converte a lista de dependências em um array
deps_array=($dependencies)

# Obtém o número total de dependências
total_deps=${#deps_array[@]}

# Inicializa o contador
i=0

# Instala as dependências em grupos de 4
while [ $i -lt $total_deps ]; do
  # Extrai um grupo de 4 dependências
  batch=(${deps_array[@]:$i:4})
  
  # Converte o grupo de volta para uma string
  batch_str=$(IFS=' '; echo "${batch[*]}")

  # Executa o npm install para o grupo
  npm install $batch_str

  # Incrementa o contador
  i=$((i + 4))
done
