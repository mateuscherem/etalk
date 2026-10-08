# Pulso do Time (GitHub Pages + Supabase)

Dois endereços: `https://SEUUSUARIO.github.io/REPO/` (time responde e vota) e `.../admin.html` (painel, com login).

## Passo a passo
1. **Supabase:** crie um projeto em supabase.com (plano gratuito).
2. **Banco:** SQL Editor > New query > cole `schema.sql` (troque `SEU_EMAIL_AQUI`) > Run.
3. **Administrador:** Authentication > Users > Add user (seu e-mail e uma senha forte, marque auto-confirm).
   Depois, Authentication > Sign In / Providers > **desative "Allow new users to sign up"**.
4. **Chaves:** Project Settings > API: copie a *Project URL* e a chave **anon public** para o `config.js`.
   (Nunca use a chave `service_role`.)
5. **GitHub:** crie um repositório, envie todos os arquivos (exceto este LEIA-ME e o schema.sql, se quiser) e ative Settings > Pages > Deploy from branch (main / root).
6. Gere o **QR Code** do endereço principal (o mesmo link serve para a coleta e para a votação).

## Fluxo de uso
1. Divulgue o link principal. O time responde (uma pergunta por tela).
2. Em `/admin.html`: aba Respostas > **Copiar prompt para o Claude** > cole no Claude > cole de volta o JSON > **Salvar análise**.
3. Revise Diagnóstico, Plano e Pauta. Em Votação, **Abrir votação**; mostre o QR Code na reunião.
4. Acompanhe o resultado e **Encerrar votação**.

## Segurança e anonimato
- A chave anon é pública por desenho; quem protege os dados são as regras RLS do `schema.sql`: o público só consegue **inserir** (e só na fase certa); somente o e-mail da tabela `admins` consegue **ler**.
- Nenhum nome, e-mail, IP ou horário é gravado com as respostas. O bloqueio de resposta duplicada é só no navegador.
- Antes de colar respostas no Claude, confirme que a política de dados da sua empresa permite.
