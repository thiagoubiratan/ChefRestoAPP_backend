# 1. Crie um diretório para o seu projeto
mkdir meu_projeto_postgres
cd meu_projeto_postgres

# 2. Crie um arquivo Dockerfile com o seguinte conteúdo
cat <<EOF > Dockerfile
# Usar a imagem oficial do PostgreSQL como base
FROM postgres:latest

# Definir variáveis de ambiente
ENV POSTGRES_USER meu_usuario
ENV POSTGRES_PASSWORD minha_senha
ENV POSTGRES_DB meu_banco

# Copiar scripts de inicialização, se houver
# COPY ./init.sql /docker-entrypoint-initdb.d/
EOF

# 3. Construa a imagem Docker
docker build -t meu_postgres_customizado .

# 4. Execute o container a partir da nova imagem
docker run --name meu_postgres_customizado -d -p 5432:5432 meu_postgres_customizado

# 5. Verifique se o container está em execução
docker ps

# 6. Conecte-se ao PostgreSQL
# psql -h localhost -p 5432 -U meu_usuario -W

# 7. Persistir dados (opcional)
# docker run --name meu_postgres_customizado -d -p 5432:5432 -v meu_volume_pg:/var/lib/postgresql/data meu_postgres_customizado

# 8. comando para aplicar as migrações em uma base nova
# npx prisma migrate deploy